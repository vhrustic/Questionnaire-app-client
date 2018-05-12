import {userConstants} from "../../constants";

const initialState = {
    isSuccess: false,
    message: ''
};

export const resetPassword = (state = initialState, action) => {
    switch (action.type) {
        case userConstants.UPDATE_PASSWORD_REQUEST:
            return state;
        case userConstants.UPDATE_PASSWORD_SUCCESS:
            return {
                ...state,
                isSuccess: true,
                message: action.message
            };
        case userConstants.UPDATE_PASSWORD_FAILURE:
            return {
                ...state,
                isSuccess: false,
                message: action.message
            };
        default:
            return state;
    }
};