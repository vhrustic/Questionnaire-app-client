import React, {Component} from 'react';
import {EditableQuestionnairePage} from './EditableQuestionnairePage';
import {EditableQuestionnaireFooter} from './EditableQuestionnaireFooter';
import {EditableQuestionnaireHeader} from './EditableQuestionnaireHeader';
import {questionnaireActions} from '../../store/actions/questionnaire';
import {connect} from 'react-redux';

class EditableQuestionnaire extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(questionnaireActions.newQuestionnaire());
    }

    render() {
        return (
            <div>
                <EditableQuestionnaireHeader/>
                <EditableQuestionnairePage/>
                <EditableQuestionnaireFooter/>
            </div>
        );
    }
}

const connectedEditableQuestionnaire = connect()(EditableQuestionnaire);
export {connectedEditableQuestionnaire as EditableQuestionnaire};