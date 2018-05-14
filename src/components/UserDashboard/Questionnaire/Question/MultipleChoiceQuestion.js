import React from 'react';
import {Checkbox, ControlLabel, FormGroup} from "react-bootstrap";

const MultipleChoiceQuestion = (props) => {
    const {question, number, onChange} = props;
    return (
        <FormGroup controlId={`multiplechoice-${question.id}`}>
            <ControlLabel>{`${number}. `}{question.title}</ControlLabel>
            {question.options.map(opt => (<Checkbox name={opt.id} key={opt.id} checked={opt.selected} onChange={onChange(question, opt.id)}>{opt.text}</Checkbox>))}
        </FormGroup>
    );
};

export {MultipleChoiceQuestion};