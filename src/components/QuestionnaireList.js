import React, {Component} from 'react';
import {Table} from "react-bootstrap";

class QuestionnaireList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Table responsive condensed hover>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Date created</th>
                    <th>Options</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Que1</td>
                    <td>First quest</td>
                    <td>12.5.2018 13:00</td>
                    <td>Edit Delete</td>
                </tr>
                </tbody>
            </Table>
        );
    }
}

export default QuestionnaireList;
