import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from "react-bootstrap";
import {EditableQuestionnaireListItem} from "./EditableQuestionnaireListItem";

class EditableQuestionnaireList extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const data = [{title: 'My questionnaire', type: 'multiple choice'}, {
            title: 'Another my questionnaire 2',
            type: 'yes / no'
        }];

        return (
            <ListGroup>
                {data.map(questionnaire => <EditableQuestionnaireListItem title={questionnaire.title} key={questionnaire.title}
                                                                          type={questionnaire.type}/>)}
            </ListGroup>
        );
    }
}

export {EditableQuestionnaireList};