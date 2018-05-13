import {questionConstants, questionnaireConstants} from "../../constants";

const initialState = {
    questionnaires: []
};

export function questionnaires(state = initialState, action) {
    switch (action.type) {
        case questionnaireConstants.LOAD_QUESTIONNAIRES_SUCCESS:
            return {
                ...state,
                questionnaires: action.questionnaires
            };
        case questionnaireConstants.DELETE_QUESTIONNAIRE_SUCCESS:
            return {
                ...state,
                questionnaires: state.questionnaires.filter(questionnaire => questionnaire.id !== action.questionnaireId)
            };
        default:
            return state;
    }
};