import {userAuthConstants} from "../constants";
import {loginHeader} from "../helpers";

export const userService = {
    login,
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
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem(userAuthConstants.LOCAL_STORAGE_USER_KEY, JSON.stringify(user));
            }

            return user;
        });
}