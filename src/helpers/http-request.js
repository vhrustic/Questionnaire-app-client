import {authHeader} from "./auth-header";

export const getRequestOptionsWithAuth = (httpMethod, payload) => {
    const authHeaders = authHeader();
    const requestOptions = {
        method: httpMethod,
        headers: {
            ...authHeaders,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
    };
    return requestOptions;
};