import React, {Component} from 'react';
import {Button, Col, Row} from "react-bootstrap";
import {EditableQuestionnairePage} from "./EditableQuestionnairePage";
import {EditableQuestionnaireFooter} from "./EditableQuestionnaireFooter";
import {EditableQuestionnaireHeader} from "./EditableQuestionnaireHeader";

class EditableQuestionnaire extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <EditableQuestionnaireHeader/>
                <EditableQuestionnairePage/>
                <EditableQuestionnaireFooter/>
            </div>
        );
    }
}

export {EditableQuestionnaire};