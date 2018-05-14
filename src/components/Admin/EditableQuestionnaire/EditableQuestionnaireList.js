import React from 'react';
import {ListGroup} from "react-bootstrap";
import {EditableQuestionnaireListItem} from "./EditableQuestionnaireListItem";

const EditableQuestionnaireList = (props) => {
    const {questions, onEditQuestion, onDeleteQuestion} = props;
    return (
        <ListGroup>
            {questions.map(question => <EditableQuestionnaireListItem onEditQuestion={onEditQuestion}
                                                                      onDeleteQuestion={onDeleteQuestion}
                                                                      title={question.title} questionId={question.id}
                                                                      key={question.id}
                                                                      type={question.type}/>)}
        </ListGroup>
    );
};


export {EditableQuestionnaireList};