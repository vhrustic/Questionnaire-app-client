import {questionConstants} from "../../constants";
import {questionService} from "../../services/question";

const newQuestion = (questionnaireId, pageId) => {
    const createNewQuestion = (questionnaireId, pageId) => ({type: questionConstants.CREATE_NEW_QUESTION, newQuestion, pageId});

    return dispatch => {
        dispatch(createNewQuestion(questionnaireId, pageId));
    };
};

const createQuestion = (pageId, question) => {
    const success = (question) => ({type: questionConstants.CREATE_NEW_QUESTION_SUCCESS, question});

    return dispatch => {
        questionService.createQuestion(pageId, question)
            .then(
                question => {
                    dispatch(success(question));
                },
                error => {
                    // dispatch(failure(error.message));
                }
            );
    };
};

export const questionActions = {
    newQuestion,
    createQuestion
};