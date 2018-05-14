import {HTTP_DELETE, HTTP_GET, HTTP_POST, HTTP_PUT} from "../constants";
import {getRequestOptionsWithAuth} from "../helpers";

const loadQuestionnaires = () => {
    const requestOptions = getRequestOptionsWithAuth(HTTP_GET);
    return fetch(`/questionnaires`, requestOptions)
        .then(response => {
            if (!response.ok) {
                return response.json().then((resp) => {
                    throw new Error(resp.message);
                });
            }
            return response.json();
        });
};

const loadUncompletedQuestionnaires = () => {
    const requestOptions = getRequestOptionsWithAuth(HTTP_GET);
    return fetch(`/questionnaires/uncompleted/all`, requestOptions)
        .then(response => {
            if (!response.ok) {
                return response.json().then((resp) => {
                    throw new Error(resp.message);
                });
            }
            return response.json();
        });
};


const loadQuestionnaire = (questionnaireId) => {
    const requestOptions = getRequestOptionsWithAuth(HTTP_GET);
    return fetch(`/questionnaires/${questionnaireId}`, requestOptions)
        .then(response => {
            if (!response.ok) {
                return response.json().then((resp) => {
                    throw new Error(resp.message);
                });
            }
            return response.json();
        });
};

const createQuestionnaire = (title) => {
    const requestOptions = getRequestOptionsWithAuth(HTTP_POST, {title});
    return fetch('/questionnaires', requestOptions)
        .then(response => {
            if (!response.ok) {
                return response.json().then((resp) => {
                    throw new Error(resp.message);
                });
            }
            return response.json();
        });
};

const deleteQuestionnaire = (questionnaireId) => {
    const requestOptions = getRequestOptionsWithAuth(HTTP_DELETE, {});
    return fetch(`/questionnaires/${questionnaireId}`, requestOptions)
        .then(response => {
            if (!response.ok) {
                return response.json().then((resp) => {
                    throw new Error(resp.message);
                });
            }
            return response.json();
        });
};

const updateQuestionnaire = (questionnaireId, questionnaire) => {
    const requestOptions = getRequestOptionsWithAuth(HTTP_PUT, questionnaire);
    return fetch(`/questionnaires/${questionnaireId}`, requestOptions)
        .then(response => {
            if (!response.ok) {
                return response.json().then((resp) => {
                    throw new Error(resp.message);
                });
            }
            return response.json();
        });
};

export const questionnaireService = {
    createQuestionnaire,
    loadQuestionnaire,
    loadQuestionnaires,
    loadUncompletedQuestionnaires,
    deleteQuestionnaire,
    updateQuestionnaire
};
