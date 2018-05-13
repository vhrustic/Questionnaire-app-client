import {HTTP_DELETE, HTTP_GET, HTTP_POST} from "../constants";
import {getRequestOptionsWithAuth} from "../helpers";

const loadPage = (pageId) => {
    const requestOptions = getRequestOptionsWithAuth(HTTP_GET);
    return fetch(`/pages/${pageId}`, requestOptions)
        .then(response => {
            if (!response.ok) {
                return response.json().then((resp) => {
                    throw new Error(resp.message);
                });
            }
            return response.json();
        });
};

const createPage = (title) => {
    const requestOptions = getRequestOptionsWithAuth(HTTP_POST, {});
    return fetch('/pages', requestOptions)
        .then(response => {
            if (!response.ok) {
                return response.json().then((resp) => {
                    throw new Error(resp.message);
                });
            }
            return response.json();
        });
};

const deletePage = (pageId) => {
    const requestOptions = getRequestOptionsWithAuth(HTTP_DELETE, {});
    return fetch(`/pages/${pageId}`, requestOptions)
        .then(response => {
            if (!response.ok) {
                return response.json().then((resp) => {
                    throw new Error(resp.message);
                });
            }
            return response.json();
        });
};


export const pageService = {
    createPage,
    loadPage,
    deletePage,
};
