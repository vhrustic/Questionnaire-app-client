import React, {Component} from 'react';
import QuestionnaireList from "./QuestionnaireList";
import {Button} from "react-bootstrap";
import {questionnaireActions} from "../store/actions/questionnaire";
import {connect} from "react-redux";
import {DEFAULT_QUESTIONNAIRE_TITLE} from "../constants";

class AdminPanel extends Component {
    constructor(props) {
        super(props);
        this.handleNewQuestionnaire = this.handleNewQuestionnaire.bind(this);
    }

    handleNewQuestionnaire() {
        const {dispatch} = this.props;
        dispatch(questionnaireActions.newQuestionnaire(DEFAULT_QUESTIONNAIRE_TITLE));
    }

    render() {
        return (
            <div>
                <h3>Questionnaires</h3>
                <Button bsStyle="primary" onClick={this.handleNewQuestionnaire}>Create new</Button>
                <QuestionnaireList/>
            </div>
        );
    }
}

const connectedAdminPanel = connect()(AdminPanel);
export {connectedAdminPanel as AdminPanel};