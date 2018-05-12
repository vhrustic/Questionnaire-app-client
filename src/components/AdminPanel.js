import React, {Component} from 'react';
import QuestionnaireList from "./QuestionnaireList";

class AdminPanel extends Component {
    constructor(props) {
        super(props);

        // reset login status
        // this.props.dispatch(userActions.logout());
    }

    render() {
        return (
            <div>
                <p>Add new</p>
                <QuestionnaireList/>
            </div>
        );
    }
}

const connectedAdminPanel = AdminPanel;
export {connectedAdminPanel as AdminPanel};