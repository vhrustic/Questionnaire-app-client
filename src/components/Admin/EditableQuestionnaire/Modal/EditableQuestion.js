import React, {Component} from 'react';
import {Button, Modal} from "react-bootstrap";
import {MultipleChoiceQuestion} from "./MultipleChoiceQuestion";
import {EditableQuestionInfo} from "./EditableQuestionInfo";
import {questionType} from "../../../../constants/index";
import {connect} from "react-redux";
import {questionActions} from "../../../../store/actions/index";


class EditableQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            type: questionType.TEXT,
            options: [
                {text: ''}
            ]
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        const {id, title, type} = this.state;
        if (id !== nextProps.question.id || title !== nextProps.question.title || type !== nextProps.question.type) {
            this.setState({
                title: nextProps.question.title,
                type: nextProps.question.type,
                options: nextProps.question.options,
                id: nextProps.question.id
            });
        }
    }

    handleChange(e) {
        const {name, value} = e.target;
        this.setState({[name]: value, options: [{text: ''}]});
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
        const {dispatch, pageId} = this.props;
        const {id, title, type, options} = this.state;
        const question = this.state;
        if (id) { // edit mode
            dispatch(questionActions.updateQuestion(id, question));
        } else {
            dispatch(questionActions.createQuestion(pageId, {
                title, type, options
            }));
        }
        this.props.closeModal();
    };

    render() {
        const {show, closeModal} = this.props;
        const {title, type, options} = this.state;
        const modalTitle = this.state.id ? 'Edit question' : 'Add new question';
        return (
            <Modal show={show} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{modalTitle}</Modal.Title>
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

const mapStateToProps = (state) => ({
    question: state.question
});

const connectedEditableQuestion = connect(mapStateToProps)(EditableQuestion);
export {connectedEditableQuestion as EditableQuestion};