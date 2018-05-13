import React, {Component} from 'react';
import {Button, Col, Row} from "react-bootstrap";
import {connect} from "react-redux";
import {pageActions} from "../../store/actions";
import {Link} from "react-router-dom/umd/react-router-dom";

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
        const {pageNumber, previousPage, nextPage, questionnaireId} = this.props;
        return (
            <Row>
                <Col sm={2} style={{marginTop: '5px'}}><strong>Page {pageNumber}</strong></Col>
                <Col sm={8} style={{marginTop: '5px'}} align="center">
                    {previousPage > 0 && <Link to={`/edit-questionnaire/${questionnaireId}/${previousPage}`}>Previous
                        page</Link>}<span> | </span>
                    {nextPage > 0 && <Link to={`/edit-questionnaire/${questionnaireId}/${nextPage}`}>Next page</Link>}
                </Col>
                <Col className="pull-right" sm={2}><Button bsStyle="primary" onClick={this.handleClick}>New
                    page</Button></Col>
            </Row>
        );
    }
}

const mapStateToProps = (state) => ({
    pageNumber: state.page.pageNumber,
    previousPage: state.page.previousPage,
    nextPage: state.page.nextPage
});

const connectedEditableQuestionnaireFooter = connect(mapStateToProps)(EditableQuestionnaireFooter);
export {connectedEditableQuestionnaireFooter as EditableQuestionnaireFooter};