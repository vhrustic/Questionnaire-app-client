import {userConstants} from './../../constants';
import {history} from './../../helpers';
import {userService} from "../../services";

const loginSuccess = (user) => {
    return {type: userConstants.LOGIN_SUCCESS, user}
};

const fbLogin = (accessToken) => {
    return dispatch => {
        userService.fbLogin(accessToken)
            .then(
                user => {
                    dispatch(loginSuccess(user));
                    history.push('/dashboard');
                },
                error => {
                }
            );
    };
};

const login = (email, password) => {
    const request = (user) => {
        return {type: userConstants.LOGIN_REQUEST, user}
    };

    const failure = (error) => {
        return {type: userConstants.LOGIN_FAILURE, error}
    };

    return dispatch => {
        dispatch(request({email}));

        userService.login(email, password)
            .then(
                user => {
                    dispatch(loginSuccess(user));
                    if (user.user.role === 'admin') {
                        history.push('/admin');
                    } else {
                        history.push('/dashboard');
                    }
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };
};

const register = (fullName, email, password) => {
    const request = (user) => {
        return {type: userConstants.REGISTER_REQUEST, user}
    };

    const success = (user) => {
        return {type: userConstants.REGISTER_SUCCESS, user}
    };

    const failure = (error) => {
        return {type: userConstants.REGISTER_FAILURE, error}
    };
    return dispatch => {
        dispatch(request({fullName, email, password}));

        userService.register(fullName, email, password)
            .then(
                user => {
                    dispatch(success(user));
                    history.push('/dashboard');
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };
};


const forgotPassword = (email) => {
    const request = (email) => {
        return {type: userConstants.FORGOT_PASSWORD_REQUEST, email}
    };

    const success = (message) => {
        return {type: userConstants.FORGOT_PASSWORD_SUCCESS, message}
    };

    const failure = (message) => {
        return {type: userConstants.FORGOT_PASSWORD_FAILURE, message}
    };

    return dispatch => {
        dispatch(request({email}));

        userService.forgotPassword(email)
            .then(
                response => {
                    dispatch(success(response.message));
                }
            ).catch(err => {
            dispatch(failure(err.message));
        });
    };
};


const resetPassword = (token, password) => {
    const success = (message) => {
        return {type: userConstants.UPDATE_PASSWORD_SUCCESS, message}
    };

    const failure = (message) => {
        return {type: userConstants.UPDATE_PASSWORD_FAILURE, message}
    };
    return dispatch => {
        userService.resetPassword(token, password)
            .then(
                response => {
                    dispatch(success(response.message));
                }
            ).catch(err => {
            dispatch(failure(err.message));
        });
    };
};

const logout = () => {
    localStorage.removeItem('user');
    return {
        type: userConstants.LOGOUT
    };
};

export const userActions = {
    login,
    fbLogin,
    register,
    forgotPassword,
    resetPassword,
    logout,
    loginSuccess
};


