import React, {Component} from 'react';
import {EditableQuestionnaireList} from "./EditableQuestionnaireList";
import {Button} from "react-bootstrap";

class EditableQuestionnairePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Button bsStyle="success" style={{marginBottom: '15px'}}>Add question</Button>
                <EditableQuestionnaireList/>
            </div>
        );
    }
}

export {EditableQuestionnairePage};