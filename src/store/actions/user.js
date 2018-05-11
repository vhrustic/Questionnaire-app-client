import {userConstants} from './../../constants';
import {history} from './../../helpers';
import {userService} from "../../services";

export const userActions = {
    login,
    register,
    forgotPassword
};

function login(email, password) {
    return dispatch => {
        dispatch(request({email}));

        userService.login(email, password)
            .then(
                user => {
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };

    function request(user) {
        return {type: userConstants.LOGIN_REQUEST, user}
    }

    function success(user) {
        return {type: userConstants.LOGIN_SUCCESS, user}
    }

    function failure(error) {
        return {type: userConstants.LOGIN_FAILURE, error}
    }
}

function register(fullName, email, password) {
    return dispatch => {
        dispatch(request({fullName, email, password}));

        userService.register(fullName, email, password)
            .then(
                user => {
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };

    function request(user) {
        return {type: userConstants.REGISTER_REQUEST, user}
    }

    function success(user) {
        return {type: userConstants.REGISTER_SUCCESS, user}
    }

    function failure(error) {
        return {type: userConstants.REGISTER_FAILURE, error}
    }
}


function forgotPassword(email) {
    return dispatch => {
        dispatch(request({email}));

        userService.forgotPassword(email)
            .then(
                response => {
                    dispatch(success(response));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };

    function request(email) {
        return {type: userConstants.FORGOT_PASSWORD_REQUEST, email}
    }

    function success(response) {
        return {type: userConstants.FORGOT_PASSWORD_SUCCESS, response}
    }

    function failure(err) {
        return {type: userConstants.FORGOT_PASSWORD_FAILURE, err}
    }
}
