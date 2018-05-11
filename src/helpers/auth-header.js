import {userAuthConstants} from "../constants";

export const authHeader = () => {
    let user = JSON.parse(localStorage.getItem(userAuthConstants.LOCAL_STORAGE_USER_KEY));

    if (user && user.token) {
        return {[userAuthConstants.HEADER_AUTH_KEY]: `${userAuthConstants.HEADER_AUTH_VALUE_PREFIX}  ${user.token}`};
    } else {
        return {};
    }
}

export const loginHeader = (email, password) => {
    const encodedCredentials = btoa(`${email}:${password}`);
    return {
        [userAuthConstants.HEADER_AUTH_KEY]: `${userAuthConstants.HEADER_AUTH_VALUE_PREFIX} ${encodedCredentials}`
    };
};
