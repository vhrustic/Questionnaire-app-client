import React, {Component} from 'react';
import {Button, Col, ControlLabel, FormControl, FormGroup, Row} from "react-bootstrap";

class EditableQuestionnaireHeader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    render() {
        const {title} = this.state;
        return (
            <div>
                <Row>
                    <Col md={10}><h3 style={{marginTop: '0px'}}>Create new questionnaire</h3></Col>
                    <Col md={2}><Button bsStyle="success" className="pull-right">SAVE</Button></Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <form name="form" onSubmit={this.handleSubmit}>
                            <FormGroup controlId="formTitle">
                                <ControlLabel>Questionnaire title</ControlLabel>
                                <FormControl type="text" name="title" value={title} maxLength={150} onChange={this.handleChange}/>
                            </FormGroup>
                        </form>
                    </Col>
                </Row>
            </div>
        );
    }
}

export {EditableQuestionnaireHeader};