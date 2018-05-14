import React from 'react';
import {ControlLabel, FormControl, FormGroup} from "react-bootstrap";

const TextQuestion = (props) => {
    const {question, number, onChange} = props;
    return (
        <FormGroup controlId={`text-${question.id}`}>
            <ControlLabel>{`${number}. `}{question.title}</ControlLabel>
            <FormControl type="text" placeholder="Enter answer" id={`text-${question.id}`} value={question.options[0].text} onChange={onChange(question)}/>
        </FormGroup>
    );
};

export {TextQuestion};