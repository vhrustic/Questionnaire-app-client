import React, {Component} from 'react';
import {EditableQuestionnairePage} from './EditableQuestionnairePage';
import {EditableQuestionnaireFooter} from './EditableQuestionnaireFooter';
import {EditableQuestionnaireHeader} from './EditableQuestionnaireHeader';
import {questionnaireActions} from '../../store/actions/questionnaire';
import {connect} from 'react-redux';
import {DEFAULT_QUESTIONNAIRE_TITLE} from '../../constants';
import {PrivateRoute} from "../PrivateRoute";

class EditableQuestionnaire extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: DEFAULT_QUESTIONNAIRE_TITLE
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const {dispatch} = this.props;
        const {questionnaireId} = this.props.match.params;
        dispatch(questionnaireActions.loadQuestionnaire(questionnaireId));
    }

    handleChange(e) {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    handleSubmit(e) {
        e.preventDefault();
        const {title} = this.state;
        const {dispatch} = this.props;
        //dispatch(userActions.login(email, password));
    }

    render() {
        const {title} = this.state;
        return (
            <div>
                <EditableQuestionnaireHeader title={title} onTitleChange={this.handleChange}
                                             onSaveTitle={this.handleSubmit}/>
                <PrivateRoute roles={['admin']} path="/edit-questionnaire/:questionnaireId/:pageId" component={EditableQuestionnairePage}/>
                <EditableQuestionnaireFooter/>
            </div>
        );
    }
}

const connectedEditableQuestionnaire = connect()(EditableQuestionnaire);
export {connectedEditableQuestionnaire as EditableQuestionnaire};