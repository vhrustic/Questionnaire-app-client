import {questionConstants, questionType} from "../../constants";

const initialState = {
    title: '',
    type: questionType.TEXT,
    options: [{text: ''}]
};

export function question(state = initialState, action) {
    switch (action.type) {
        case questionConstants.CREATE_NEW_QUESTION:
            return initialState;
        case questionConstants.CREATE_NEW_QUESTION_SUCCESS:
            return {
                ...state,
                ...action.question
            };
        default:
            return state;
    }
};


