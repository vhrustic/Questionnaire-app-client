import React, {Component} from 'react';
import {Button, ButtonGroup, ListGroup, ListGroupItem} from "react-bootstrap";

class EditableQuestionnaireListItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ListGroupItem header={this.props.title}>
                <span>Question type: {this.props.type}</span>
                <span className="pull-right">
                    <Button bsSize="xsmall" bsStyle="primary">Edit</Button>
                     <Button bsSize="xsmall" bsStyle="danger">Delete</Button>
                </span>
            </ListGroupItem>
        );
    }
}

export {EditableQuestionnaireListItem};