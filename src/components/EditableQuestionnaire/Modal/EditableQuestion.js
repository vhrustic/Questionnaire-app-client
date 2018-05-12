import React, {Component} from 'react';
import {Button, ControlLabel, FormControl, FormGroup, Modal} from "react-bootstrap";
import {questionType} from "../../../constants";

class EditableQuestion extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {show, title} = this.props;
        const questionTypes = Object.entries(questionType);
        return (
            <Modal show={show} onHide={this.close}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new question</Modal.Title>
                </Modal.Header>
                <form>
                    <Modal.Body>
                        <FormGroup controlId="formQuestionTitle">
                            <ControlLabel>Question</ControlLabel>
                            <FormControl type="text" name="fullName" value={title} onChange={this.handleChange}/>
                        </FormGroup>

                        <FormGroup controlId="formControlsSelect">
                            <ControlLabel>Select question type</ControlLabel>
                            <FormControl componentClass="select" placeholder="select">
                                {questionTypes.map(questionType => <option
                                    value={questionType[0]}>{questionType[1]}</option>)}
                            </FormControl>
                        </FormGroup>


                        <h4>Text in a modal</h4>
                        <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

                        <h4>Popover in a modal</h4>


                        <hr/>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close}>Close</Button>
                    </Modal.Footer>
                </form>
            </Modal>
        );
    }
}

export {EditableQuestion};