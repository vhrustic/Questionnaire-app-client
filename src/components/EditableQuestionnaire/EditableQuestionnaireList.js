import React, {Component} from 'react';
import {ListGroup} from "react-bootstrap";
import {EditableQuestionnaireListItem} from "./EditableQuestionnaireListItem";
import {connect} from "react-redux";

class EditableQuestionnaireList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {questions} = this.props;
        return (
            <ListGroup>
                {questions.map(question => <EditableQuestionnaireListItem title={question.title} key={question.id}
                                                                          type={question.type}/>)}
            </ListGroup>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        questions: state.page.questions
    }
};

const connectedEditableQuestionnaireList = connect(mapStateToProps)(EditableQuestionnaireList);
export {connectedEditableQuestionnaireList as EditableQuestionnaireList};