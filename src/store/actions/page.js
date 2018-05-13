import {pageConstants} from "../../constants";
import {pageService} from "../../services";
import {redirectTo} from "../../helpers";

const newPage = (questionnaireId) => {
    const success = (page) => ({
        type: pageConstants.CREATE_NEW_PAGE_SUCCESS,
        page
    });

    return dispatch => {
        pageService.createPage(questionnaireId)
            .then(
                page => {
                    dispatch(success(page));
                    redirectTo(`/edit-questionnaire/${questionnaireId}/${page.id}`);
                },
                error => {
                   // dispatch(failure(error.message));
                }
            );
    };
};


const loadPage = (questionnaireId, pageId) => {
    const success = (page) => ({
        type: pageConstants.LOAD_PAGE_SUCCESS,
        page
    });

    return (dispatch) => {
        pageService.loadPage(questionnaireId, pageId)
            .then(
                page => {
                    dispatch(success(page));
                },
                error => {
                    // dispatch(failure(error.message));
                }
            );
    };
};


export const pageActions = {
    newPage,
    loadPage,
};