import React, {Component} from 'react';
import {Button, Modal} from "react-bootstrap";
import {MultipleChoiceQuestion} from "./MultipleChoiceQuestion";
import {EditableQuestionInfo} from "./EditableQuestionInfo";
import {questionType} from "../../../constants";
import {connect} from "react-redux";
import {questionActions} from "../../../store/actions";

class EditableQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            type: Object.keys(questionType)[0], // default question type: Text
            options: [
                {text: ''}
            ]
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    handleChange(e) {
        const {name, value} = e.target;
        this.setState({[name]: value});
    };

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

    handleSave() {
        const {dispatch} = this.props;
        const {title, type, options} = this.state;
        dispatch(questionActions.newQuestion({
            title, type, options
        }));
        this.props.closeModal();
    };

    render() {
        const {show, closeModal} = this.props;
        const {title, type, options} = this.state;
        return (
            <Modal show={show} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new question</Modal.Title>
                </Modal.Header>
                <form>
                    <Modal.Body>
                        <EditableQuestionInfo title={title} type={type} onChangeHandler={this.handleChange}/>
                        {(type === questionType.SINGLE_CHOICE || type === questionType.MULTIPLE_CHOICE) &&
                        <MultipleChoiceQuestion options={options}
                                                onAddHandler={this.handleAddOption}
                                                onRemoveHandler={this.handleRemoveOption}
                                                onChangeHandler={this.handleOptionChange}/>}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsStyle="success" onClick={this.handleSave}>Save</Button>
                        <Button onClick={closeModal}>Close</Button>
                    </Modal.Footer>
                </form>
            </Modal>
        );
    }
}

const connectedEditableQuestion = connect()(EditableQuestion);
export {connectedEditableQuestion as EditableQuestion};