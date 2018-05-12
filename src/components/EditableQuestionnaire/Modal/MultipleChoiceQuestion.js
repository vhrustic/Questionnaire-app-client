import React, {Component} from 'react';
import {Button, Col, FormControl, Glyphicon, Row} from "react-bootstrap";

class MultipleChoiceQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: [
                {text: ''}
            ]
        };
        this.handleAddOption = this.handleAddOption.bind(this);
    }

    handleAddOption() {
        this.setState({
            options: [...this.state.options, {text: ''}]
        });
    }

    handleRemoveOption = (id) => () => {
        if (this.state.options.length === 1) {
            return;
        }
        this.setState({options: this.state.options.filter((s, sidx) => id !== sidx)});
    };

    handleOptionChange = (idx) => (evt) => {
        const newOptions = this.state.options.map((option, sidx) => {
            if (idx !== sidx) {
                return option;
            }
            return {...option, text: evt.target.value};
        });
        this.setState({options: newOptions});
    };

    render() {
        const {options} = this.state;
        return (
            <div>{options.map((option, id) => (
                <Row key={'option' + id} style={{marginBottom: '5px'}}>
                    <Col sm={2} style={{marginTop: '5px'}}>
                        Option {id + 1}
                    </Col>
                    <Col sm={8}>
                        <FormControl type="text" value={option.text} onChange={this.handleOptionChange(id)} required/>
                    </Col>
                    <Col sm={2} style={{marginTop: '5px'}}>
                        <Button onClick={this.handleRemoveOption(id)} bsSize="xsmall">
                            <Glyphicon glyph="minus"/></Button>
                    </Col>
                </Row>
            ))}
                <Button onClick={this.handleAddOption} bsSize="xsmall">
                    <Glyphicon glyph="plus"/></Button>
            </div>
        );
    }
}

export {MultipleChoiceQuestion};

