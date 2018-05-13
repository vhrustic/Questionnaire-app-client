import React from 'react';
import {Button, ListGroupItem} from "react-bootstrap";

const EditableQuestionnaireListItem = (props) => {
    return (
        <ListGroupItem header={props.title}>
            <span>Question type: {props.type}</span>
            <span className="pull-right">
                    <Button bsSize="xsmall" bsStyle="primary">Edit</Button>
                    <Button bsSize="xsmall" bsStyle="danger">Delete</Button>
                </span>
        </ListGroupItem>
    );
};

export {EditableQuestionnaireListItem};