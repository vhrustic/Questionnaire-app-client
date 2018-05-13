import {pageConstants, questionConstants, questionnaireConstants} from "../../constants";

const initialState = {
    questions: []
};

export function page(state = initialState, action) {
    switch (action.type) {
        case pageConstants.LOAD_PAGE_SUCCESS:
            return action.page;
        case pageConstants.CREATE_NEW_PAGE_SUCCESS:
            return {
                ...state,
                ...action.page,
                questions: [],
            };
        case questionConstants.CREATE_NEW_QUESTION_SUCCESS:
            return {
                ...state,
                questions: [...state.questions, action.question]
            };
        case questionConstants.UPDATE_QUESTION_SUCCESS:
            const updatedQuestions = state.questions.map((question) => {
                if (question.id !== action.question.id) {
                    return question;
                }
                return {
                    ...question,
                    ...action.question
                };
            });
            return {
                ...state,
                questions: updatedQuestions
            };
        case questionConstants.DELETE_QUESTION_SUCCESS:
            return {
                ...state,
                questions: state.questions.filter(question => question.id !== action.questionId)
            };
        default:
            return state;
    }
};