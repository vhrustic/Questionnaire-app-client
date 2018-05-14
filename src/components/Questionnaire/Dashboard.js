import React, {Component} from 'react';
import {questionnaireActions} from "../../store/actions/questionnaire";
import {connect} from "react-redux";
import {Questionnaires} from "./Questionnaires";

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(questionnaireActions.loadUncompletedQuestionnaires());
    }

    render() {
        const {questionnaires} = this.props;
        return (
            <div>
                <h3>Available questionnaires</h3>
                <Questionnaires questionnaires={questionnaires}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        questionnaires: state.questionnaires.questionnaires
    };
};

const connectedDashboard = connect(mapStateToProps)(Dashboard);
export {connectedDashboard as Dashboard};