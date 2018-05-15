import {userAuthConstants} from "../constants";
import {loginHeader} from "../helpers";

const fbLogin = (accessToken) => {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    };

    return fetch(`/auth/facebook/token?access_token=${accessToken}`, requestOptions)
        .then(response => {
            if (!response.ok) {
                return Promise.reject(response.statusText);
            }
            return response.json();
        })
        .then(user => {
            if (user && user.token) {
                localStorage.setItem(userAuthConstants.LOCAL_STORAGE_USER_KEY, JSON.stringify(user));
            }
            return user;
        });
};

function login(email, password) {
    const loginHeaders = loginHeader(email, password);
    const requestOptions = {
        method: 'POST',
        headers: {
            ...loginHeaders,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({email: email, password})
    };

    return fetch('/auth', requestOptions)
        .then(response => {
            if (!response.ok) {
                return Promise.reject(response.statusText);
            }
            return response.json();
        })
        .then(user => {
            if (user && user.token) {
                localStorage.setItem(userAuthConstants.LOCAL_STORAGE_USER_KEY, JSON.stringify(user));
            }
            return user;
        });
}

function register(fullName, email, password) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({fullName, email: email, password})
    };

    return fetch('/users', requestOptions)
        .then(response => {
            if (!response.ok) {
                return Promise.reject(response.statusText);
            }
            return response.json();
        })
        .then(user => {
            if (user && user.token) {
                localStorage.setItem(userAuthConstants.LOCAL_STORAGE_USER_KEY, JSON.stringify(user));
            }
            return user;
        });
}

function forgotPassword(email) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({email})
    };

    return fetch('/auth/forgot-password', requestOptions)
        .then(response => {
            if (!response.ok) {
                return response.json().then((resp) => {
                    throw new Error(resp.message);
                });
            }
            return response.json();
        });
}

function resetPassword(token, password) {
    const requestOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({password})
    };

    return fetch(`/auth/forgot-password?token=${token}`, requestOptions)
        .then(response => {
            if (!response.ok) {
                return response.json().then((resp) => {
                    throw new Error(resp.message);
                });
            }
            return response.json();
        });
}

export const userService = {
    login,
    fbLogin,
    register,
    forgotPassword,
    resetPassword
};