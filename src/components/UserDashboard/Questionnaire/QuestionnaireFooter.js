import React, {Component} from 'react';
import {Button, Col, Row} from "react-bootstrap";
import {connect} from "react-redux";
import {Link} from "react-router-dom/umd/react-router-dom";

class QuestionnaireFooter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {previousPage, nextPage, questionnaireId, onChangePage} = this.props;
        return (
            <Row>
                <Col sm={8} style={{marginTop: '5px'}} align="center">
                    {previousPage > 0 && <Button onClick={onChangePage(questionnaireId, previousPage)}>Previous
                        page</Button>}<span> {previousPage > 0 && nextPage > 0 && ' | '} </span>
                    {nextPage > 0 &&
                    <Button onClick={onChangePage(questionnaireId, nextPage)}>Next page</Button>}
                </Col>
            </Row>
        );
    }
}

const mapStateToProps = (state) => ({
    nextPage: state.questionnaire.nextPage,
    previousPage: state.questionnaire.previousPage
});

const connectedQuestionnaireFooter = connect(mapStateToProps)(QuestionnaireFooter);
export {connectedQuestionnaireFooter as QuestionnaireFooter};