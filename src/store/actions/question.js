import {questionConstants} from "../../constants";

const newQuestion = (newQuestion, activePage) => {
    const createNewQuestion = (newQuestion, activePage) => ({type: questionConstants.CREATE_NEW_QUESTION, newQuestion, activePage});

    return dispatch => {
        dispatch(createNewQuestion(newQuestion, activePage));
    };
};

export const questionActions = {
    newQuestion,
};