import React from 'react';
import {ListGroup} from "react-bootstrap";
import {EditableQuestionnaireListItem} from "./EditableQuestionnaireListItem";

const EditableQuestionnaireList = (props) => {
    const {questions} = props;
    return (
        <ListGroup>
            {questions.map(question => <EditableQuestionnaireListItem title={question.title} key={question.id}
                                                                      type={question.type}/>)}
        </ListGroup>
    );
};


export {EditableQuestionnaireList};