import {questionnaireConstants} from "../../constants";

const newQuestionnaire = () => {
    const createNewQuestionnaire = () => ({type: questionnaireConstants.CREATE_NEW_QUESTIONNAIRE});

    return dispatch => {
        dispatch(createNewQuestionnaire());
    };
};

export const questionnaireActions = {
    newQuestionnaire,
};