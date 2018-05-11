import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {authentication, forgotPassword, registration} from './reducers';

const rootReducer = combineReducers({
    authentication,
    registration,
    forgotPassword
});


const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware
    )
);

export default store;