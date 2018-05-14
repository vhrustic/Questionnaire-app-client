import {getRequestOptionsWithAuth} from "../helpers";
import {HTTP_POST} from "../constants";

const saveAnswers = (answers) => {
    const requestOptions = getRequestOptionsWithAuth(HTTP_POST, answers);
    return fetch('/answers', requestOptions)
        .then(response => {
            if (!response.ok) {
                return response.json().then((resp) => {
                    throw new Error(resp.message);
                });
            }
            return response.json();
        });
};


export const answerService = {
  saveAnswers
};