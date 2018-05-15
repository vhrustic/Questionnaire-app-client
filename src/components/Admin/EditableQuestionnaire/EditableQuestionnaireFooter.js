import React, {Component} from 'react';
import {Button, Col, Row} from "react-bootstrap";
import {connect} from "react-redux";
import {pageActions} from "../../../store/actions/index";
import {Link} from "react-router-dom/umd/react-router-dom";
import {redirectTo} from "../../../helpers";

class EditableQuestionnaireFooter extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    handleClick() {
        const {questionnaireId, dispatch} = this.props;
        dispatch(pageActions.newPage(questionnaireId))
    }

    handleSave() {
        redirectTo('/admin');
    }

    render() {
        const {pageNumber, previousPage, nextPage, questionnaireId} = this.props;
        return (
            <Row>
                <Col sm={2} style={{marginTop: '5px'}}><strong>Page {pageNumber}</strong></Col>
                <Col sm={7} style={{marginTop: '5px'}} align="center">
                    {previousPage > 0 && <Link to={`/edit-questionnaire/${questionnaireId}/${previousPage}`}>Previous
                        page</Link>} {(previousPage > 0 && nextPage > 0) && <span> | </span>}
                    {nextPage > 0 && <Link to={`/edit-questionnaire/${questionnaireId}/${nextPage}`}>Next page</Link>}
                </Col>
                <Col className="pull-right" sm={3}><Button bsStyle="primary" onClick={this.handleClick}>New
                    page</Button>
                    {nextPage < 0 &&
                    <Button bsStyle="success" style={{marginTop: '20px'}} onClick={this.handleSave}>Save
                        questionnaire</Button>}
                </Col>
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