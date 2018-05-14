import React, {Component} from 'react';
import {connect} from "react-redux";
import {SingleChoiceQuestion, TextQuestion, YesNoQuestion} from "./Question";
import {questionnaireActions} from "../../../store/actions";
import {questionType} from "../../../constants";
import {MultipleChoiceQuestion} from "./Question/MultipleChoiceQuestion";
import {
    getQuestionsDeepCopy,
    redirectTo,
    setMultipleChoiceQuestionAnswer,
    setSingleChoiceQuestionAnswer,
    setTextAnswer
} from "../../../helpers";
import {Button} from "react-bootstrap";
import {QuestionnaireFooter} from "./QuestionnaireFooter";


class QuestionnairePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangePage = this.handleChangePage.bind(this);
    }

    componentDidMount() {
        const {dispatch} = this.props;
        const {pageId} = this.props.match.params;
        if (pageId) {
            dispatch(questionnaireActions.setActivePage(pageId));
        }
    }

    componentWillReceiveProps(nextProps) {
        const {dispatch} = this.props;
        const newPageId = nextProps.match.params.pageId;
        if (newPageId && this.props.activePage.toString() !== newPageId) {
            dispatch(questionnaireActions.setActivePage(newPageId));
        }
        const questions = nextProps.page ? nextProps.page.questions : [];
        const newQuestions = getQuestionsDeepCopy(questions);
        this.setState({questions: newQuestions})
    }

    handleChange(question, optionId) {
        return (e) => {
            switch (question.type) {
                case questionType.SINGLE_CHOICE:
                    let newQuestions = setSingleChoiceQuestionAnswer(this.state.questions, question.id, optionId);
                    this.setState({questions: newQuestions});
                    return;
                case questionType.YES_NO:
                    newQuestions = setSingleChoiceQuestionAnswer(this.state.questions, question.id, optionId);
                    this.setState({questions: newQuestions});
                    return;
                case questionType.TEXT:
                    newQuestions = setTextAnswer(this.state.questions, question.id, e.target.value);
                    this.setState({questions: newQuestions});
                    return;
                case questionType.MULTIPLE_CHOICE:
                    newQuestions = setMultipleChoiceQuestionAnswer(this.state.questions, question.id, optionId, e.target.checked);
                    this.setState({questions: newQuestions});
                    return;
                default:
                    return;
            }
        }
    }

    handleSubmit() {
        console.log(this.state);
    }

    handleChangePage = (questionnaireId, newPageId) => {
        return () => {
            const {dispatch} = this.props;
            const {pageId} = this.props.match.params;
            console.log(this.state.questions);
            dispatch(questionnaireActions.updateQuestionnaireAnswers(pageId, this.state.questions));
            redirectTo(`/questionnaire/${questionnaireId}/${newPageId}`);
        };
    }

    render() {
        const {questions} = this.state;
        const {nextPage} = this.props;
        const {questionnaireId} = this.props.match.params;
        let renderQuestion = null;
        return (
            <div>
                <form>
                    {questions.map((question, id) => {
                        if (question.type === questionType.TEXT) {
                            renderQuestion = <TextQuestion key={question.id} number={id + 1} question={question}
                                                           onChange={this.handleChange}/>
                        }
                        else if (question.type === questionType.SINGLE_CHOICE) {
                            renderQuestion = <SingleChoiceQuestion key={question.id} number={id + 1} question={question}
                                                                   onChange={this.handleChange}/>
                        }
                        else if (question.type === questionType.MULTIPLE_CHOICE) {
                            renderQuestion =
                                <MultipleChoiceQuestion key={question.id} number={id + 1} question={question}
                                                        onChange={this.handleChange}/>
                        } else if (question.type === questionType.YES_NO) {
                            renderQuestion = <YesNoQuestion key={question.id} number={id + 1} question={question}
                                                            onChange={this.handleChange}/>
                        }
                        return renderQuestion;
                    })}
                    {nextPage > 0 && <Button bsStyle="success" onClick={this.handleSubmit}>Submit answers</Button>}
                </form>

                <QuestionnaireFooter questionnaireId={questionnaireId} onChangePage={this.handleChangePage}/>
            </div>
        );
    }
}


const mapStateToProps = (state, ownProps) => ({
    page: state.questionnaire.pages.find(p => p.id === parseInt(ownProps.match.params.pageId, 10)),
    activePage: state.questionnaire.activePage,
    nextPage: state.questionnaire.nextPage,
});

const connectedQuestionnairePage = connect(mapStateToProps)(QuestionnairePage);
export {connectedQuestionnairePage as QuestionnairePage};