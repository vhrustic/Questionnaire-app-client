import React, {Component} from 'react';
import {Button, Table} from "react-bootstrap";
import {humanReadableDateTime} from '../../helpers/index';
import {connect} from "react-redux";

class Questionnaires extends Component {
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
                    <td>{humanReadableDateTime(questionnaire.createdAt)}</td>
                    <td><Button bsSize="xsmall" bsStyle="primary"
                                href={`/questionnaire/${questionnaire.id}`}>Open</Button></td>
                </tr>))}
                </tbody>
            </Table>
        );
    }
}

const connectedQuestionnaires = connect()(Questionnaires);
export {connectedQuestionnaires as Questionnaires};
