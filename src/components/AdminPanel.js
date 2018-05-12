import React, {Component} from 'react';
import QuestionnaireList from "./QuestionnaireList";
import {Button} from "react-bootstrap";
import {history} from './../helpers';


class AdminPanel extends Component {
    constructor(props) {
        super(props);

        // reset login status
        // this.props.dispatch(userActions.logout());
    }

    redirectToNewQuestionnaire() {
        history.push('/new-questionnaire');
    }

    render() {
        return (
            <div>
                <h2>Questionnaires</h2>
                <Button bsStyle="primary" onClick={this.redirectToNewQuestionnaire}>Create new</Button>
                <QuestionnaireList/>
            </div>
        );
    }
}

const connectedAdminPanel = AdminPanel;
export {connectedAdminPanel as AdminPanel};