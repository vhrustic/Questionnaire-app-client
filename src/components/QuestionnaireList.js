import React, {Component} from 'react';
import {Button, ButtonGroup, Table} from "react-bootstrap";
import {humanReadableDateTime} from './../helpers';
import {Confirm} from "react-confirm-bootstrap";
import {connect} from "react-redux";
import {questionnaireActions} from "../store/actions";

class QuestionnaireList extends Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete = (questionnaireId) => {
        return () => {
            const {dispatch} = this.props;
            dispatch(questionnaireActions.deleteQuestionnaire(questionnaireId));
        }
    };

    render() {
        const {questionnaires} = this.props;
        return (
            <Table responsive condensed hover>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Date created</th>
                    <th>Options</th>
                </tr>
                </thead>
                <tbody>
                {questionnaires.map(questionnaire => (<tr key={questionnaire.id}>
                    <td>{questionnaire.title}</td>
                    <td>{humanReadableDateTime(questionnaire.createdAt)}</td>
                    <td>
                        <ButtonGroup>
                            <Button bsSize="xsmall" bsStyle="primary"
                                    href={`/edit-questionnaire/${questionnaire.id}`}>Edit</Button>
                            <Confirm
                                onConfirm={this.handleDelete(questionnaire.id)}
                                body={`Are you sure you want to delete question: ${questionnaire.title}`}
                                confirmText="Confirm Delete"
                                title="Delete questionnaire">
                                <Button bsSize="xsmall" bsStyle="danger">Delete</Button>
                            </Confirm>
                        </ButtonGroup>
                    </td>
                </tr>))}
                </tbody>
            </Table>
        );
    }
}

const connectedQuestionnaireList = connect()(QuestionnaireList);
export {connectedQuestionnaireList as QuestionnaireList};
