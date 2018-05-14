import React from 'react';
import {ControlLabel, FormControl, FormGroup} from "react-bootstrap";

const TextQuestion = (props) => {
    const {question, number} = props;
    console.log(question);
    return (
        <FormGroup controlId={`text-${question.id}`}>
            <ControlLabel>{`${number}. `}{question.title}</ControlLabel>
            <FormControl type="text" placeholder="Enter answer" id={`text-${question.id}`}/>
        </FormGroup>
    );
};

export {TextQuestion};