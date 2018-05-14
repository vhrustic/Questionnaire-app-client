import React, {Component} from 'react';
import {Button, Col, FormControl, Glyphicon, Row} from "react-bootstrap";

class EditableMultipleChoiceQuestion extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {onAddHandler, onRemoveHandler, onChangeHandler, options} = this.props;
        return (
            <div>{options.map((option, id) => (
                <Row key={'option' + id} style={{marginBottom: '5px'}}>
                    <Col sm={2} style={{marginTop: '5px'}}>
                        Option {id + 1}
                    </Col>
                    <Col sm={8}>
                        <FormControl type="text" value={option.text} onChange={onChangeHandler(id)} required/>
                    </Col>
                    <Col sm={2} style={{marginTop: '5px'}}>
                        <Button onClick={onRemoveHandler(id)} bsSize="xsmall">
                            <Glyphicon glyph="minus"/></Button>
                    </Col>
                </Row>
            ))}
                <Button onClick={onAddHandler} bsSize="xsmall">
                    <Glyphicon glyph="plus"/></Button>
            </div>
        );
    }
}

export {EditableMultipleChoiceQuestion};

