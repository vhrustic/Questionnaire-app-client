import React from 'react';
import {Button, ListGroupItem} from "react-bootstrap";
import {Confirm} from "react-confirm-bootstrap";
import {questionTypeReadable} from "../../../constants/index";

const EditableQuestionnaireListItem = (props) => {
    const {onEditQuestion, onDeleteQuestion, title, type, questionId} = props;
    return (
        <ListGroupItem header={title}>
            <span>Question type: {questionTypeReadable[type]}</span>
            <span className="pull-right">
                    <Button bsSize="xsmall" bsStyle="primary" onClick={onEditQuestion(questionId)}>Edit</Button>
                    <Confirm
                        onConfirm={onDeleteQuestion(questionId)}
                        body={`Are you sure you want to delete question: ${title}`}
                        confirmText="Confirm Delete"
                        title="Delete question">
                <Button bsSize="xsmall" bsStyle="danger">Delete</Button>
            </Confirm>
                </span>

        </ListGroupItem>
    );
};

export {EditableQuestionnaireListItem};