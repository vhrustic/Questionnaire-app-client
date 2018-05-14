import React, {Component} from 'react';
import {Button} from "react-bootstrap";
import {questionnaireActions} from "../../store/actions/questionnaire";
import {connect} from "react-redux";
import {DEFAULT_QUESTIONNAIRE_TITLE} from "../../constants/index";
import {QuestionnaireList} from "./QuestionnaireList";

class AdminPanel extends Component {
    constructor(props) {
        super(props);
        this.handleNewQuestionnaire = this.handleNewQuestionnaire.bind(this);
    }

    handleNewQuestionnaire() {
        const {dispatch} = this.props;
        dispatch(questionnaireActions.newQuestionnaire(DEFAULT_QUESTIONNAIRE_TITLE));
    }

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(questionnaireActions.loadQuestionnaires());
    }

    render() {
        const {questionnaires} = this.props;
        return (
            <div>
                <h3>Questionnaires</h3>
                <Button bsStyle="primary" onClick={this.handleNewQuestionnaire}>Create new</Button>
                <QuestionnaireList questionnaires={questionnaires}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        questionnaires: state.questionnaires.questionnaires
    };
};

const connectedAdminPanel = connect(mapStateToProps)(AdminPanel);
export {connectedAdminPanel as AdminPanel};