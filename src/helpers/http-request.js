import {authHeader} from "./auth-header";
import {HTTP_GET} from "../constants";

export const getRequestOptionsWithAuth = (httpMethod, payload) => {
    const authHeaders = authHeader();
    const requestOptions = {
        method: httpMethod,
        headers: {
            ...authHeaders,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
    };
    if (httpMethod !== HTTP_GET) {
        requestOptions.body = JSON.stringify(payload);
    }
    return requestOptions;
};