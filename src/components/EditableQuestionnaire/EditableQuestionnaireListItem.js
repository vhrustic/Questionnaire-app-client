import React, {Component} from 'react';
import {Button, ButtonGroup, ListGroup, ListGroupItem} from "react-bootstrap";

class EditableQuestionnaireListItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ListGroupItem header={this.props.title}>
                Question type: {this.props.type}
                <ButtonGroup className="pull-right">
                    <Button bsSize="xsmall" bsStyle="primary">Edit</Button>
                    <Button bsSize="xsmall" bsStyle="danger">Delete</Button>
                </ButtonGroup>
            </ListGroupItem>
        );
    }
}

export {EditableQuestionnaireListItem};