import {HTTP_DELETE, HTTP_GET, HTTP_POST} from "../constants";
import {getRequestOptionsWithAuth} from "../helpers";

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
    const requestOptions = getRequestOptionsWithAuth(HTTP_DELETE, questionnaire);
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
    deleteQuestionnaire,
    updateQuestionnaire
};