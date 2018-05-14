import React from 'react';
import {ControlLabel, FormGroup, Radio} from "react-bootstrap";

const YesNoQuestion = (props) => {
    const {question, number} = props;
    return (
        <FormGroup controlId={`yesno-${question.id}`}>
            <ControlLabel>{`${number}. `}{question.title}</ControlLabel>
            {question.options.map(opt => (<Radio key={opt.id} name="radioGroup">{opt.text}</Radio>))}
        </FormGroup>
    );
};

export {YesNoQuestion};