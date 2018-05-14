import React from 'react';
import {ControlLabel, FormGroup, Radio} from "react-bootstrap";

const SingleChoiceQuestion = (props) => {
    const {question, number, onChange} = props;
    return (
        <FormGroup controlId={`singlechoice-${question.id}`}>
            <ControlLabel>{`${number}. `}{question.title}</ControlLabel>
            {question.options.map(opt => (
                <Radio value={opt.id} key={opt.id} name={`radiogroup${number}`} checked={opt.selected}
                       onChange={onChange(question, opt.id)}>{opt.text}</Radio>))}
        </FormGroup>
    );
};

export {SingleChoiceQuestion};