import React from 'react';
import {ControlLabel, FormGroup, Radio} from "react-bootstrap";

const SingleChoiceQuestion = (props) => {
    const {question, number} = props;
    return (
        <FormGroup controlId={`singlechoice-${question.id}`}>
            <ControlLabel>{`${number}. `}{question.title}</ControlLabel>
            {question.options.map(opt => (<Radio key={opt.id} name="radioGroup">{opt.text}</Radio>))}
        </FormGroup>
    );
};

export {SingleChoiceQuestion};