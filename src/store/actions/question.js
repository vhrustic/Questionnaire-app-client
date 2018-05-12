import {questionConstants} from "../../constants";

const newQuestion = (newQuestion) => {
    const createNewQuestion = (newQuestion) => ({type: questionConstants.CREATE_NEW_QUESTION, newQuestion});

    return dispatch => {
        dispatch(createNewQuestion(newQuestion));
    };
};

export const questionActions = {
    newQuestion,
};