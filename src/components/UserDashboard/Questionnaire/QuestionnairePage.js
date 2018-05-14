import React, {Component} from 'react';
import {connect} from "react-redux";
import {SingleChoiceQuestion, TextQuestion, YesNoQuestion} from "./Question";
import {questionnaireActions} from "../../../store/actions";
import {questionType} from "../../../constants";
import {MultipleChoiceQuestion} from "./Question/MultipleChoiceQuestion";


class QuestionnairePage extends Component {
    constructor(props) {
        super(props);
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
        }

    render() {
        const {page} = this.props;
        if (!page) {
            return null;
        }
        let renderQuestion = null;
        return (
            <form>
                {page.questions.map((question, id) => {

                    {
                        renderQuestion = question.type === questionType.TEXT ||
                            <TextQuestion key={question.id} number={id + 1} question={question}/>
                    }
                    {
                        renderQuestion = question.type === questionType.SINGLE_CHOICE ||
                            <SingleChoiceQuestion key={question.id} number={id + 1} question={question}/>
                    }
                    {
                        renderQuestion = question.type === questionType.MULTIPLE_CHOICE ||
                            <MultipleChoiceQuestion key={question.id} number={id + 1} question={question}/>
                    }
                    {
                        renderQuestion = question.type === questionType.YES_NO ||
                            <YesNoQuestion key={question.id} number={id + 1} question={question}/>
                    }
                    return renderQuestion;
                })}
            </form>
        );
    }
}


const mapStateToProps = (state, ownProps) => ({
    page: state.questionnaire.pages.find(p => p.id === parseInt(ownProps.match.params.pageId, 10)),
    activePage: state.questionnaire.activePage
});

const connectedQuestionnairePage = connect(mapStateToProps)(QuestionnairePage);
export {connectedQuestionnairePage as QuestionnairePage};