import React, {Component} from 'react';
import {Button, Col, Row} from "react-bootstrap";
import {connect} from "react-redux";
import {pageActions} from "../../store/actions";

class EditableQuestionnaireFooter extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const {questionnaireId, dispatch} = this.props;
        dispatch(pageActions.newPage(questionnaireId))
    }

    render() {
        const {pageNumber} = this.props;
        return (
            <Row>
                <Col md={2}><p>Page {pageNumber}</p></Col>
                <Col mdOffset={8} md={2}><Button onClick={this.handleClick}>New page</Button></Col>
            </Row>
        );
    }
}

const mapStateToProps = (state) => ({
    pageNumber: state.page.pageNumber
});

const connectedEditableQuestionnaireFooter = connect(mapStateToProps)(EditableQuestionnaireFooter);
export {connectedEditableQuestionnaireFooter as EditableQuestionnaireFooter};