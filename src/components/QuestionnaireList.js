import React, {Component} from 'react';
import {Button, ButtonGroup, Table} from "react-bootstrap";

class QuestionnaireList extends Component {
    constructor(props) {
        super(props);
    }

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
                    <td>{questionnaire.createdAt}</td>
                    <td>
                        <ButtonGroup>
                            <Button bsSize="xsmall" bsStyle="primary" href={`/edit-questionnaire/${questionnaire.id}`}>Edit</Button>
                            <Button bsSize="xsmall" bsStyle="danger">Delete</Button>
                        </ButtonGroup>
                    </td>
                </tr>))}
                </tbody>
            </Table>
        );
    }
}

export default QuestionnaireList;
