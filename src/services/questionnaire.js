import {HTTP_POST} from "../constants";
import {getRequestOptionsWithAuth} from "../helpers";

const createQuestionnaire = (title) => {
    const requestOptions = getRequestOptionsWithAuth(HTTP_POST, {title});
    return fetch('/questionnaire', requestOptions)
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
    createQuestionnaire
};
