import {pageConstants, questionConstants, questionnaireConstants} from "../../constants";

const initialState = {
    title: '',
    pages: []
};

export function questionnaire(state = initialState, action) {
    switch (action.type) {
        case questionnaireConstants.CREATE_NEW_QUESTIONNAIRE:
            return {
                ...state,
                title: action.title,
                pages: [{questions: []}]
            };
        case questionConstants.CREATE_NEW_QUESTION:
            return {
                ...state,
                pages: [...state.pages, action.newQuestion]
            };
        case questionnaireConstants.CREATE_NEW_QUESTIONNAIRE_FAIL:
            return {
                ...state,
                createError: action.createError
            };
        case questionnaireConstants.CREATE_NEW_QUESTIONNAIRE_SUCCESS:
            return {
                ...state,
                id: action.createdQuestionnaire.id
            };
        default:
            return state;
    }
};