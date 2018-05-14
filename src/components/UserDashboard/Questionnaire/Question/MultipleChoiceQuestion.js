import React from 'react';
import {Checkbox, ControlLabel, FormGroup} from "react-bootstrap";

const MultipleChoiceQuestion = (props) => {
    const {question, number} = props;
    return (
        <FormGroup controlId={`multiplechoice-${question.id}`}>
            <ControlLabel>{`${number}. `}{question.title}</ControlLabel>
            {question.options.map(opt => (<Checkbox name={opt.id} key={opt.id}>{opt.text}</Checkbox>))}
        </FormGroup>
    );
};

export {MultipleChoiceQuestion};