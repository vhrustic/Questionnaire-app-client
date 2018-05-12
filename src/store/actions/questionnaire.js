import {questionnaireConstants} from "../../constants";
import {questionnaireService} from "../../services";

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
                },
                error => {
                    dispatch(failure(error.message));
                }
            );
    };
};

export const questionnaireActions = {
    newQuestionnaire,
};