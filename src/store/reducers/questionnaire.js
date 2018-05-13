import {questionConstants, questionnaireConstants} from "../../constants";

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
        case questionnaireConstants.UPDATE_QUESTIONNAIRE_SUCCESS:
            return {
                ...state,
                title: action.questionnaire
            };
        case questionnaireConstants.LOAD_QUESTIONNAIRE_SUCCESS:
            return {
                ...state,
                ...action.questionnaire
            };
        default:
            return state;
    }
};