import {getRequestOptionsWithAuth} from "../helpers";
import {HTTP_POST, questionType} from "../constants";

const createQuestion = (pageId, question) => {
    const getQuestionOptions = (type, options) => {
        if (type === questionType.YES_NO) {
            const options = [{text: 'Yes'}, {text: 'No'}];
            return options;
        }
        return options;
    };
    const questionBody = {
        ...question,
        options: getQuestionOptions(question.type, question.options)
    };
    const requestOptions = getRequestOptionsWithAuth(HTTP_POST, questionBody);
    return fetch(`/questions/${pageId}`, requestOptions)
        .then(response => {
            if (!response.ok) {
                return response.json().then((resp) => {
                    throw new Error(resp.message);
                });
            }
            return response.json();
        });
};

export const questionService = {
    createQuestion
};
