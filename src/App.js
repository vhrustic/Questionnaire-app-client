import React, {Component} from 'react';
import './App.css';
import {Col, Row} from 'react-bootstrap';
import {Router, Route} from 'react-router-dom';
import {history} from './helpers';
import {
    AdminPanel,
    ForgotPassword,
    Login,
    Register,
    PrivateRoute,
    ResetPassword,
    AppNavbar,
    EditableQuestionnaire,
} from './components';
import {Dashboard} from "./components/Questionnaire";

class App extends Component {
    render() {
        return (
            <div>
                <AppNavbar/>
                <Row className="container">
                    <Router history={history}>
                        <Col mdOffset={2} md={10}>
                            <PrivateRoute exac path="/admin" roles={['admin']} component={AdminPanel}/>
                            <Route exact path="/login" component={Login}/>
                            <Route exact path="/register" component={Register}/>
                            <Route exact path="/forgot-password" component={ForgotPassword}/>
                            <Route path="/reset-password" component={ResetPassword}/>
                            <PrivateRoute roles={['admin']} path="/edit-questionnaire/:questionnaireId"
                                          component={EditableQuestionnaire}/>
                            <PrivateRoute roles={['user']} path="/dashboard" component={Dashboard}/>
                        </Col>
                    </Router>
                </Row>
            </div>
        );
    }
}

export default App;
