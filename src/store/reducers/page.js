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
        default:
            return state;
    }
};