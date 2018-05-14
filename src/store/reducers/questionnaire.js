import {questionConstants, questionnaireConstants} from "../../constants";

const initialState = {
    title: '',
    pages: [],
    activePage: 0,
    previousPage: 0,
    nextPage: 0
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
                title: action.questionnaire.title
            };
        case questionnaireConstants.LOAD_QUESTIONNAIRE_SUCCESS:
            return {
                ...state,
                ...action.questionnaire
            };
        case questionnaireConstants.LOAD_UNCOMPLETED_QUESTIONNAIRE:
            return {
                ...state,
                ...action.questionnaire
            };
        case questionnaireConstants.SET_ACTIVE_PAGE:
            return {
                ...state,
                activePage: action.activePage,
                previousPage: action.previousPage,
                nextPage: action.nextPage
            };
        case questionnaireConstants.SUBMIT_ANSWERS_SUCCESS:
            return {
                ...initialState
            };
        case questionnaireConstants.UPDATE_QUESTIONNAIRE_PAGE_ANSWERS:
            const newPages = state.pages.map(page => {
                if (page.id !== parseInt(action.pageId, 10)) {
                    return page;
                }
                const newQuestions = action.questions.map(question => {
                    const newOptions = question.options.map(opt => {
                        return {
                            ...opt
                        }
                    });
                    return {
                        ...question,
                        options: newOptions
                    };
                });
                return {
                    ...page,
                    questions: newQuestions
                };
            });
            return {
                ...state,
                pages: newPages
            };
        default:
            return state;
    }
};