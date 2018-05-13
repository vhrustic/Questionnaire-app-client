import React from 'react';
import {Button, ListGroupItem} from "react-bootstrap";

const EditableQuestionnaireListItem = (props) => {
    const {onEditQuestion, title, type, questionId} = props;
    return (
        <ListGroupItem header={title}>
            <span>Question type: {type}</span>
            <span className="pull-right">
                    <Button bsSize="xsmall" bsStyle="primary" onClick={onEditQuestion(questionId)}>Edit</Button>
                    <Button bsSize="xsmall" bsStyle="danger">Delete</Button>
                </span>
        </ListGroupItem>
    );
};

export {EditableQuestionnaireListItem};