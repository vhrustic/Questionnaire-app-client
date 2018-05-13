import {getRequestOptionsWithAuth} from "../helpers";
import {HTTP_DELETE, HTTP_GET, HTTP_POST, HTTP_PUT, questionType} from "../constants";

const getQuestionOptions = (type, options) => {
    if (type === questionType.YES_NO) {
        const options = [{text: 'Yes'}, {text: 'No'}];
        return options;
    }
    return options;
};

const createQuestion = (pageId, question) => {
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

const loadQuestion = (questionId) => {
    const requestOptions = getRequestOptionsWithAuth(HTTP_GET);
    return fetch(`/questions/${questionId}`, requestOptions)
        .then(response => {
            if (!response.ok) {
                return response.json().then((resp) => {
                    throw new Error(resp.message);
                });
            }
            return response.json();
        });
};

const updateQuestion = (questionId, question) => {
    const questionBody = {
        ...question,
        options: getQuestionOptions(question.type, question.options)
    };
    const requestOptions = getRequestOptionsWithAuth(HTTP_PUT, questionBody);
    return fetch(`/questions/${questionId}`, requestOptions)
        .then(response => {
            if (!response.ok) {
                return response.json().then((resp) => {
                    throw new Error(resp.message);
                });
            }
            return response.json();
        });
};

const deleteQuestion = (questionId) => {
    const requestOptions = getRequestOptionsWithAuth(HTTP_DELETE);
    return fetch(`/questions/${questionId}`, requestOptions)
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
    createQuestion,
    loadQuestion,
    updateQuestion,
    deleteQuestion
};
