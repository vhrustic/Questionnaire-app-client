import {pageConstants, questionConstants, questionnaireConstants} from "../../constants";

const initialState = {
    questions: []
};

export function page(state = initialState, action) {
    switch (action.type) {
        case pageConstants.LOAD_PAGE_SUCCESS:
            return action.page;
        default:
            return state;
    }
};