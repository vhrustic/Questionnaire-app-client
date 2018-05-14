import React, {Component} from 'react';
import {connect} from 'react-redux';
import {QuestionnaireHeader} from "./QuestionnaireHeader";
import {QuestionnairePage} from "./QuestionnairePage";
import {questionnaireActions} from "../../../store/actions/questionnaire";
import {PrivateRoute} from "../../PrivateRoute";
import {QuestionnaireFooter} from "./QuestionnaireFooter";

class Questionnaire extends Component {
    constructor(props) {
        super(props);
    }

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
        const {questionnaireId} = this.props.match.params;
        return (
            <div>
                <QuestionnaireHeader title={questionnaire.title}/>
                <PrivateRoute roles={['user']} path="/questionnaire/:questionnaireId/:pageId"
                              component={QuestionnairePage}/>
                <QuestionnaireFooter questionnaireId={questionnaireId}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    questionnaire: state.questionnaire,
});

const connectedQuestionnaire = connect(mapStateToProps)(Questionnaire);
export {connectedQuestionnaire as Questionnaire};