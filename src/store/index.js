import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {authentication, forgotPassword, page, questionnaire, questionnaires, registration, resetPassword} from './reducers';

const rootReducer = combineReducers({
    authentication,
    registration,
    forgotPassword,
    resetPassword,
    questionnaire,
    questionnaires,
    page,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(
        thunkMiddleware
    ))
);

export default store;