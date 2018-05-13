import React, {Component} from 'react';
import {EditableQuestionnaireList} from "./EditableQuestionnaireList";
import {Button} from "react-bootstrap";
import {EditableQuestion} from "./Modal";
import {connect} from "react-redux";
import {pageActions} from "../../store/actions/page";
import {questionnaireActions} from "../../store/actions/questionnaire";
import {questionActions} from "../../store/actions";


class EditableQuestionnairePage extends Component {
    constructor(props) {
        super(props);

        this.handleAddQuestion = this.handleAddQuestion.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
            show: false
        };
    }

    componentDidMount() {
        const {dispatch} = this.props;
        const {questionnaireId, pageId} = this.props.match.params;
        dispatch(questionnaireActions.loadQuestionnaire(questionnaireId));
        dispatch(pageActions.loadPage(questionnaireId, pageId)) // dispatch loadPage
    }

    handleClose() {
        this.setState({show: false});
    }

    handleAddQuestion() {
        this.setState({show: true});
        const {dispatch} = this.props;
        const {questionnaireId, pageId} = this.props.match.params;
        dispatch(questionActions.newQuestion(questionnaireId, pageId));
    }

    render() {
        const {questionnaireId, pageId} = this.props.match.params;
        const {questions} = this.props;
        return (
            <div>
                <Button bsStyle="info" style={{marginBottom: '15px'}} onClick={this.handleAddQuestion}>Add
                    question</Button>
                <EditableQuestionnaireList questions={questions}/>
                <EditableQuestion show={this.state.show} closeModal={this.handleClose} questionnaireId={questionnaireId}
                                  pageId={pageId}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    questions: state.page.questions
});

const connectedEditableQuestionnairePage = connect(mapStateToProps)(EditableQuestionnairePage);
export {connectedEditableQuestionnairePage as EditableQuestionnairePage};