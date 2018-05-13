import {questionnaireConstants} from "../../constants";
import {questionnaireService} from "../../services";
import {redirectTo} from "../../helpers";

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
                    const page = questionnaire.pages[0].id;
                    redirectTo(`/edit-questionnaire/${questionnaire.id}/${page}`);
                },
                error => {
                    dispatch(failure(error.message));
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
                },
                error => {
                    dispatch(failure(error.message));
                }
            );
    };
};


export const questionnaireActions = {
    newQuestionnaire,
    loadQuestionnaire,
};