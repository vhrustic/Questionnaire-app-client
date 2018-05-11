import React, {Component} from 'react';
import {connect} from 'react-redux';

class AdminPanel extends Component {
    constructor(props) {
        super(props);

        // reset login status
        // this.props.dispatch(userActions.logout());
    }

    render() {
        return (
           <p>Welcome to ADMIN PANEL</p>
        );
    }
}

const connectedAdminPanel = AdminPanel;
export {connectedAdminPanel as AdminPanel};