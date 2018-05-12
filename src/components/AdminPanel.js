import React, {Component} from 'react';
import QuestionnaireList from "./QuestionnaireList";
import {Button} from "react-bootstrap";
import {redirectTo} from "../helpers";

class AdminPanel extends Component {
    constructor(props) {
        super(props);
        this.handleNewQuestionnaire = this.handleNewQuestionnaire.bind(this);
    }

    handleNewQuestionnaire() {
        redirectTo('/new-questionnaire');
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

export {AdminPanel};