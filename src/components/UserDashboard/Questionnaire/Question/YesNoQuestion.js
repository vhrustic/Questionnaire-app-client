import React from 'react';
import {ControlLabel, FormGroup, Radio} from "react-bootstrap";

const YesNoQuestion = (props) => {
    const {question, number, onChange} = props;
    return (
        <FormGroup controlId={`yesno-${question.id}`}>
            <ControlLabel>{`${number}. `}{question.title}</ControlLabel>
            {question.options.map(opt => (<Radio value={opt.id} key={opt.id} name={`yesno${number}`} checked={!!opt.selected} onChange={onChange(question, opt.id)}>{opt.text}</Radio>))}
        </FormGroup>
    );
};

export {YesNoQuestion};