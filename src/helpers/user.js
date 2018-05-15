import {userAuthConstants} from "../constants";

export const getLoggedUser = () => {
    const userObj = JSON.parse(localStorage.getItem(userAuthConstants.LOCAL_STORAGE_USER_KEY));
    if (!userObj) {
        return {
            user: {}
        };
    }
    return userObj;
};

