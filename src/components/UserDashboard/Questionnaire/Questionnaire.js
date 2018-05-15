import React, {Component} from 'react';
import {connect} from 'react-redux';
import {QuestionnaireHeader} from "./QuestionnaireHeader";
import {QuestionnairePage} from "./QuestionnairePage";
import {questionnaireActions} from "../../../store/actions/questionnaire";
import {PrivateRoute} from "../../PrivateRoute";

class Questionnaire extends Component {
    componentDidMount() {
        const {dispatch} = this.props;
        const {questionnaireId} = this.props.match.params;
        dispatch(questionnaireActions.loadUncompletedQuestionnaire(questionnaireId));
    }

    render() {
        const {questionnaire} = this.props;
        if (!questionnaire) {
            return null;
        }
        return (
            <div>
                <QuestionnaireHeader title={questionnaire.title}/>
                <PrivateRoute roles={['user']} path="/questionnaire/:questionnaireId/:pageId"
                              component={QuestionnairePage}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    questionnaire: state.questionnaire,
});

const connectedQuestionnaire = connect(mapStateToProps)(Questionnaire);
export {connectedQuestionnaire as Questionnaire};