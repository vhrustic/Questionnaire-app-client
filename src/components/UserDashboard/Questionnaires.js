import React from 'react';
import {Button, Table} from "react-bootstrap";
import {humanReadableDateTime} from '../../helpers/index';

const Questionnaires = (props) => {
    const {questionnaires} = props;
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
};

export {Questionnaires};
