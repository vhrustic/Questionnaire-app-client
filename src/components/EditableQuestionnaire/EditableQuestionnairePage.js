import React, {Component} from 'react';
import {EditableQuestionnaireList} from "./EditableQuestionnaireList";
import {Button} from "react-bootstrap";
import {EditableQuestion} from "./Modal";
import {connect} from "react-redux";
import {pageActions} from "../../store/actions/page";


class EditableQuestionnairePage extends Component {
    constructor(props) {
        super(props);

        this.handleAddQuestion = this.handleAddQuestion.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
            show: false
        };
    }

    componentDidMount() {
        const {dispatch} = this.props;
        const {pageId} = this.props.match.params;
        dispatch(pageActions.loadPage(pageId)) // dispatch loadPage
    }

    handleClose() {
        this.setState({show: false});
    }

    handleAddQuestion() {
        this.setState({show: true});
    }

    render() {
        return (
            <div>
                <Button bsStyle="info" style={{marginBottom: '15px'}} onClick={this.handleAddQuestion}>Add
                    question</Button>
                <EditableQuestionnaireList/>
                <EditableQuestion show={this.state.show} closeModal={this.handleClose}/>
            </div>
        );
    }
}


const connectedEditableQuestionnairePage = connect()(EditableQuestionnairePage);
export {connectedEditableQuestionnairePage as EditableQuestionnairePage};