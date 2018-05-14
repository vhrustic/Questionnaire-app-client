import React, {Component} from 'react';
import {EditableQuestionnaireList} from "./EditableQuestionnaireList";
import {Button} from "react-bootstrap";
import {EditableQuestion} from "./Modal/index";
import {connect} from "react-redux";
import {pageActions} from "../../../store/actions/page";
import {questionActions} from "../../../store/actions/index";


class EditableQuestionnairePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
        this.handleAddQuestion = this.handleAddQuestion.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleEditQuestion = this.handleEditQuestion.bind(this);
        this.handleDeleteQuestion = this.handleDeleteQuestion.bind(this);
    }

    componentDidMount() {
        const {dispatch} = this.props;
        const {questionnaireId, pageId} = this.props.match.params;
        dispatch(pageActions.loadPage(questionnaireId, pageId));
    }

    componentWillReceiveProps(nextProps) {
        const {dispatch} = this.props;
        const {questionnaireId, pageId} = this.props.match.params;
        const newPageId = nextProps.match.params.pageId;
        if (newPageId && pageId !== newPageId) {
            dispatch(pageActions.loadPage(questionnaireId, newPageId));
        }
    }

    handleClose() {
        this.setState({show: false});
        const {dispatch} = this.props;
        dispatch(questionActions.clearQuestion());
    }

    handleAddQuestion() {
        this.setState({show: true});
        const {dispatch} = this.props;
        const {questionnaireId, pageId} = this.props.match.params;
        dispatch(questionActions.newQuestion(questionnaireId, pageId));
    }

    handleEditQuestion(questionId) {
        return () => {
            this.setState({show: true});
            const {dispatch} = this.props;
            dispatch(questionActions.loadQuestion(questionId));
        };
    }

    handleDeleteQuestion(questionId) {
        return () => {
            const {dispatch} = this.props;
            dispatch(questionActions.deleteQuestion(questionId));
        };
    }

    render() {
        const {questionnaireId, pageId} = this.props.match.params;
        const {questions} = this.props;
        return (
            <div>
                <Button bsStyle="info" style={{marginBottom: '15px'}} onClick={this.handleAddQuestion}>Add
                    question</Button>
                <EditableQuestionnaireList questions={questions} onEditQuestion={this.handleEditQuestion}
                                           onDeleteQuestion={this.handleDeleteQuestion}/>
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