import {userConstants} from "../../constants";
import {getLoggedUser} from "../../helpers";

const user = getLoggedUser();
const initialState = user ? {loggedIn: true, user} : {};

export function registration(state = initialState, action) {
    switch (action.type) {
        case userConstants.REGISTER_REQUEST:
            return {
                user: action.user
            };
        case userConstants.REGISTER_SUCCESS:
            return {
                user: action.user
            };
        case userConstants.REGISTER_FAILURE:
            return {};
        default:
            return state;
    }
};