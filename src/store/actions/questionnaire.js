import {questionnaireConstants} from "../../constants";
import {questionnaireService} from "../../services";
import {getNextPageId, getPreviousPageId, redirectTo} from "../../helpers";

const newQuestionnaire = (title) => {
    const createNewQuestionnaire = (title) => ({type: questionnaireConstants.CREATE_NEW_QUESTIONNAIRE, title});
    const success = (createdQuestionnaire) => ({
        type: questionnaireConstants.CREATE_NEW_QUESTIONNAIRE_SUCCESS,
        createdQuestionnaire
    });
    const failure = (createError) => ({type: questionnaireConstants.CREATE_NEW_QUESTIONNAIRE_FAIL, createError});

    return dispatch => {
        dispatch(createNewQuestionnaire(title));
        questionnaireService.createQuestionnaire(title)
            .then(
                questionnaire => {
                    dispatch(success(questionnaire));
                    redirectTo(`/edit-questionnaire/${questionnaire.id}`);
                },
                error => {
                    dispatch(failure(error.message));
                }
            );
    };
};

const loadQuestionnaires = () => {
    const success = (questionnaires) => ({
        type: questionnaireConstants.LOAD_QUESTIONNAIRES_SUCCESS,
        questionnaires
    });

    return dispatch => {
        questionnaireService.loadQuestionnaires()
            .then(
                questionnaires => {
                    dispatch(success(questionnaires));
                },
                error => {
                    // dispatch(failure(error.message));
                }
            );
    };
};

const loadUncompletedQuestionnaires = () => {
    const success = (questionnaires) => ({
        type: questionnaireConstants.LOAD_UNCOMPLETED_QUESTIONNAIRES,
        questionnaires
    });

    return dispatch => {
        questionnaireService.loadUncompletedQuestionnaires()
            .then(
                questionnaires => {
                    dispatch(success(questionnaires));
                },
                error => {
                    // dispatch(failure(error.message));
                }
            );
    };
};


const loadQuestionnaire = (questionnaireId) => {
    const loadQuestionnaire = (questionnaire) => ({type: questionnaireConstants.LOAD_QUESTIONNAIRE, questionnaire});
    const success = (questionnaire) => ({
        type: questionnaireConstants.LOAD_QUESTIONNAIRE_SUCCESS,
        questionnaire
    });
    const failure = (error) => ({type: questionnaireConstants.LOAD_QUESTIONNAIRE_FAIL, error});

    return dispatch => {
        dispatch(loadQuestionnaire(questionnaireId));
        questionnaireService.loadQuestionnaire(questionnaireId)
            .then(
                questionnaire => {
                    dispatch(success(questionnaire));
                    const firstPage = questionnaire.pages[0];
                    redirectTo(`/edit-questionnaire/${questionnaire.id}/${firstPage.id}`)
                },
                error => {
                    dispatch(failure(error.message));
                }
            );
    };
};

const loadUncompletedQuestionnaire = (questionnaireId) => {
    const success = (questionnaire) => ({
        type: questionnaireConstants.LOAD_UNCOMPLETED_QUESTIONNAIRE,
        questionnaire
    });

    return dispatch => {
        questionnaireService.loadUncompletedQuestionnaire(questionnaireId)
            .then(
                questionnaire => {
                    const firstPage = questionnaire.pages[0];
                    questionnaire.activePage = firstPage.id;
                    questionnaire.nextPage = questionnaire.pages[1] ? questionnaire.pages[1].id : 0;
                    dispatch(success(questionnaire));
                    redirectTo(`/questionnaire/${questionnaire.id}/${firstPage.id}`)
                },
                error => {
                    // dispatch(failure(error.message));
                }
            );
    };
};


const updateQuestionnaire = (questionnaireId, questionnaire) => {
    const success = (questionnaire) => ({
        type: questionnaireConstants.UPDATE_QUESTIONNAIRE_SUCCESS,
        questionnaire
    });

    return dispatch => {
        questionnaireService.updateQuestionnaire(questionnaireId, questionnaire)
            .then(
                () => {
                    dispatch(success({title: questionnaire.title}));
                },
                error => {
                    // dispatch(failure(error.message));
                }
            );
    };
};

const deleteQuestionnaire = (questionnaireId) => {
    const success = (questionnaireId) => ({
        type: questionnaireConstants.DELETE_QUESTIONNAIRE_SUCCESS,
        questionnaireId
    });

    return dispatch => {
        questionnaireService.deleteQuestionnaire(questionnaireId)
            .then(
                () => {
                    dispatch(success(questionnaireId));
                },
                error => {
                    // dispatch(failure(error.message));
                }
            );
    };
};

const setActivePage = (pageId) => {
    const success = (previousPage, nextPage) => ({
        type: questionnaireConstants.SET_ACTIVE_PAGE,
        activePage: pageId,
        previousPage, nextPage
    });

    return (dispatch, getState) => {
        const pages = getState().questionnaire.pages;
        const nextPage = getNextPageId(pages, pageId);
        const previousPage = getPreviousPageId(pages, pageId);
        dispatch(success(previousPage, nextPage));
    }
};


export const questionnaireActions = {
    newQuestionnaire,
    loadQuestionnaire,
    loadQuestionnaires,
    loadUncompletedQuestionnaires,
    loadUncompletedQuestionnaire,
    updateQuestionnaire,
    deleteQuestionnaire,
    setActivePage
};