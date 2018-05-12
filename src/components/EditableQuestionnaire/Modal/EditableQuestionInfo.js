import React, {Component} from 'react';
import {ControlLabel, FormControl, FormGroup} from 'react-bootstrap';
import {questionType, questionTypeReadable} from '../../../constants';

class EditableQuestionInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {onChangeHandler, type, title} = this.props;
        const questionTypes = Object.keys(questionType);
        const questionTypesDisplay = Object.values(questionTypeReadable);
        return (
            <div>
                <FormGroup controlId="formQuestionTitle">
                    <ControlLabel>Question</ControlLabel>
                    <FormControl type="text" name="title" value={title} onChange={onChangeHandler}/>
                </FormGroup>

                <FormGroup controlId="formControlsSelect">
                    <ControlLabel>Select question type</ControlLabel>
                    <FormControl componentClass="select" placeholder="select" name="type"
                                 value={type}
                                 onChange={onChangeHandler}>
                        {questionTypes.map((questionType, idx) => <option key={questionType}
                                                                          value={questionType}>{questionTypesDisplay[idx]}</option>)}
                    </FormControl>
                </FormGroup>
            </div>
        );
    }
}

export {EditableQuestionInfo};

