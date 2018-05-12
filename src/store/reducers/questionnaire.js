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
                pages: [{questions: []}]
            };
        case questionConstants.CREATE_NEW_QUESTION:
            return {
                ...state,
                pages: [...state.pages, action.newQuestion]
            };
        default:
            return state;
    }
};