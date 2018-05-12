import React, {Component} from 'react';
import {EditableQuestionnaireList} from "./EditableQuestionnaireList";
import {Button} from "react-bootstrap";
import {EditableQuestion} from "./Modal";
import {connect} from "react-redux";
import {questionActions} from "../../store/actions";
import {questionType} from "../../constants";

class EditableQuestionnairePage extends Component {
    constructor(props) {
        super(props);

        this.handleAddQuestion = this.handleAddQuestion.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
            show: false
        };
    }

    handleClose() {
        this.setState({show: false});
    }

    handleAddQuestion() {
        const {dispatch} = this.props;
        dispatch(questionActions.newQuestion({
            title: '',
            type: Object.keys(questionType)[0] // default question type: Text
        }));
        this.setState({show: true});
    }

    render() {
        return (
            <div>
                <Button bsStyle="info" style={{marginBottom: '15px'}} onClick={this.handleAddQuestion}>Add question</Button>
                <EditableQuestionnaireList/>
                <EditableQuestion show={this.state.show} closeModal={this.handleClose}/>
            </div>
        );
    }
}


const connectedEditableQuestionnairePage = connect()(EditableQuestionnairePage);
export {connectedEditableQuestionnairePage as EditableQuestionnairePage};