import React, {Component} from 'react';
import {Button, ControlLabel, FormControl, FormGroup} from "react-bootstrap";
import {questionnaireActions} from "../../store/actions/questionnaire";
import {connect} from "react-redux";

class EditableQuestionnaireHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.title !== nextProps.title) {
            this.setState({
                title: nextProps.title
            });
        }
    }

    handleChange(e) {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    handleSubmit(e) {
        e.preventDefault();
        const {title} = this.state;
        const {dispatch} = this.props;
        const {questionnaireId} = this.props;
        dispatch(questionnaireActions.updateQuestionnaire(questionnaireId, {title}));
    }

    render() {
        const {title} = this.state;
        return (
            <div>
                <h3>Create new questionnaire</h3>
                <form name="questionnaireTitleForm" onSubmit={this.handleSubmit}>
                    <FormGroup controlId="formTitle">
                        <ControlLabel>Questionnaire title</ControlLabel>
                        <FormControl type="text" name="title" value={title} minLength={1} maxLength={150}
                                     onChange={this.handleChange}/>
                    </FormGroup>
                    <Button bsStyle="success" className="pull-right">Update title</Button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    title: state.questionnaire.title
});

const connectedEditableQuestionnaireHeader = connect(mapStateToProps)(EditableQuestionnaireHeader);
export {connectedEditableQuestionnaireHeader as EditableQuestionnaireHeader};