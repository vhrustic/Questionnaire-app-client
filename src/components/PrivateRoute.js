import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {getLoggedUser} from '../helpers';

export const PrivateRoute = ({component: Component, ...rest}) => {
    const {roles} = rest;
    return (<Route {...rest} render={props => {
        const userObj = getLoggedUser();
        const isLogged = Boolean(userObj);
        const isAuthorised = isLogged && roles.indexOf(userObj.user.role) > -1;
        if (!isLogged) {
            return <Redirect to={{pathname: '/login', state: {from: props.location}}}/>;
        }
        if (!isAuthorised) {
            return <Redirect to={{pathname: '/unauthorized', state: {from: props.location}}}/>;
        }
        return <Component {...props} {...rest} />;
    }}/>)
};