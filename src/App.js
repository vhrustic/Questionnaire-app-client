import React, {Component} from 'react';
import './App.css';
import {Col, Grid, Row} from 'react-bootstrap';
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
    Questionnaire,
    Dashboard
} from './components';


class App extends Component {
    render() {
        return (
            <div>
                <AppNavbar/>
                <Grid>
                    <Row>
                        <Col mdOffset={1} md={10}>
                            <Router history={history}>
                                <div>
                                    <PrivateRoute exac path="/admin" roles={['admin']}
                                                                         component={AdminPanel}/>
                                    <PrivateRoute roles={['user']} path="/dashboard" component={Dashboard}/>
                                    <Route exact path="/login" component={Login}/>
                                    <Route exact path="/register" component={Register}/>
                                    <Route exact path="/forgot-password" component={ForgotPassword}/>
                                    <Route path="/reset-password" component={ResetPassword}/>
                                    <PrivateRoute roles={['admin']} path="/edit-questionnaire/:questionnaireId"
                                                  component={EditableQuestionnaire}/>
                                    <PrivateRoute roles={['user']} path="/questionnaire/:questionnaireId"
                                                  component={Questionnaire}/>
                                </div>
                            </Router>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default App;
