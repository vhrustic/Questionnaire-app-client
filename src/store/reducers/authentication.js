import {userAuthConstants} from '../../constants';
import {userConstants} from "../../constants";

const user = JSON.parse(localStorage.getItem(userAuthConstants.LOCAL_STORAGE_USER_KEY));
const initialState = user ? {user} : {user: {user: {role: ''}, token: ''}};

export function authentication(state = initialState, action) {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                ...state,
                user: action.user
            };
        case userConstants.LOGIN_SUCCESS:
            return {
                ...state,
                user: action.user
            };
        case userConstants.LOGIN_FAILURE:
            return {user: {user: {role: ''}, token: ''}};
        case userConstants.LOGOUT:
            return {user: {user: {role: ''}, token: ''}};
        default:
            return state
    }
};