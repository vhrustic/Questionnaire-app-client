import React, {Component} from 'react';
import {EditableQuestionnaireList} from "./EditableQuestionnaireList";
import {Button} from "react-bootstrap";
import {EditableQuestion} from "./Modal";

class EditableQuestionnairePage extends Component {
    constructor(props) {
        super(props);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false
        };
    }

    handleClose() {
        this.setState({show: false});
    }

    handleShow() {
        this.setState({show: true});
    }

    render() {
        return (
            <div>
                <Button bsStyle="success" style={{marginBottom: '15px'}} onClick={this.handleShow}>Add question</Button>
                <EditableQuestionnaireList/>
                <EditableQuestion show={this.state.show}/>
            </div>
        );
    }
}

export {EditableQuestionnairePage};