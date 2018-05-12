import React, {Component} from 'react';
import {Button, Col, Row} from "react-bootstrap";

class EditableQuestionnaireFooter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Row>
                <Col md={2}><p>Page 1</p></Col>
                <Col mdOffset={8} md={2}><Button>New page</Button></Col>
            </Row>
        );
    }
}

export {EditableQuestionnaireFooter};