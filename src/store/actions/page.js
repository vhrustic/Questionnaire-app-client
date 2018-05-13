import {pageConstants} from "../../constants";
import {pageService} from "../../services";
import {redirectTo} from "../../helpers";

const newPage = (title) => {
    const createNewPage = () => ({type: pageConstants.CREATE_NEW_QUESTIONNAIRE, title});
    const success = (createdPage) => ({
        type: pageConstants.CREATE_NEW_QUESTIONNAIRE_SUCCESS,
        createdPage
    });
    const failure = (createError) => ({type: pageConstants.CREATE_NEW_QUESTIONNAIRE_FAIL, createError});

    return dispatch => {
        dispatch(createNewPage());
        pageService.createPage()
            .then(
                page => {
                    dispatch(success(page));
                    const pagen = page.pages[0].id;
                    redirectTo(`/edit-page/${page.id}/${pagen}`);
                },
                error => {
                    dispatch(failure(error.message));
                }
            );
    };
};


const loadPage = (pageId) => {
    const success = (page) => ({
        type: pageConstants.LOAD_PAGE_SUCCESS,
        page
    });

    return dispatch => {
        pageService.loadPage(pageId)
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