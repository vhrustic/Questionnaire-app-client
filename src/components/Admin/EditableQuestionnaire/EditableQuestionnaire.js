import React, {Component} from 'react';
import {EditableQuestionnairePage} from './EditableQuestionnairePage';
import {EditableQuestionnaireFooter} from './EditableQuestionnaireFooter';
import {EditableQuestionnaireHeader} from './EditableQuestionnaireHeader';
import {connect} from 'react-redux';
import {PrivateRoute} from "../../PrivateRoute";
import {questionnaireActions} from "../../../store/actions/questionnaire";

class EditableQuestionnaire extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {dispatch} = this.props;
        const {questionnaireId} = this.props.match.params;
        dispatch(questionnaireActions.loadQuestionnaire(questionnaireId));
    }

    render() {
        const {questionnaireId} = this.props.match.params;
        return (
            <div>
                <EditableQuestionnaireHeader questionnaireId={questionnaireId}/>
                <PrivateRoute roles={['admin']} path="/edit-questionnaire/:questionnaireId/:pageId"
                              component={EditableQuestionnairePage}/>
                <EditableQuestionnaireFooter questionnaireId={questionnaireId}/>
            </div>
        );
    }
}

const connectedEditableQuestionnaire = connect()(EditableQuestionnaire);
export {connectedEditableQuestionnaire as EditableQuestionnaire};