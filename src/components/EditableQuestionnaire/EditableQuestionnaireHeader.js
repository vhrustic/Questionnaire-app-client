import React, {Component} from 'react';
import {Button, ControlLabel, FormControl, FormGroup} from "react-bootstrap";

class EditableQuestionnaireHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {onTitleChange, onSaveTitle, title} = this.props;
        return (
            <div>
                <h3>Create new questionnaire</h3>
                <form name="questionnaireTitleForm" onSubmit={onSaveTitle}>
                    <FormGroup controlId="formTitle">
                        <ControlLabel>Questionnaire title</ControlLabel>
                        <FormControl type="text" name="title" value={title} minLength={1} maxLength={150}
                                     onChange={onTitleChange}/>
                    </FormGroup>
                    <Button bsStyle="success" className="pull-right">Update title</Button>
                </form>
            </div>
        );
    }
}

export {EditableQuestionnaireHeader};