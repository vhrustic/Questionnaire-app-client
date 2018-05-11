import {userConstants} from "../../constants";

const initialState = {
    email: '',
    isSuccess: false,
    message: ''
};

export const forgotPassword = (state = initialState, action) => {
    switch (action.type) {
        case userConstants.FORGOT_PASSWORD_REQUEST:
            return {
                ...state,
                email: action.email
            };
        case userConstants.FORGOT_PASSWORD_SUCCESS:
            return {
                ...state,
                isSuccess: true,
                message: action.message
            };
        case userConstants.REGISTER_FAILURE:
            return {
                ...state,
                isSuccess: true,
                message: action.message
            };
        default:
            return state
    }
};