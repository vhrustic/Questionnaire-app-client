import React, {Component} from 'react';
import './App.css';
import {Col, Jumbotron, Row} from 'react-bootstrap';
import {Router, Route} from 'react-router-dom';
import {history} from './helpers';
import {AdminPanel, ForgotPassword, Login, Register} from './components';
import {PrivateRoute} from "./components/PrivateRoute";
import {ResetPassword} from "./components/ResetPassword";
import AppNavbar from "./components/AppNavbar";

class App extends Component {
    render() {
        return (
            <div>
                <AppNavbar/>
                <Row className="container">
                    <Router history={history}>
                        <Col mdOffset={2} md={8}>
                            <PrivateRoute exac path="/admin" roles={['admin']} component={AdminPanel}/>
                            <Route exact path="/login" component={Login}/>
                            <Route exact path="/register" component={Register}/>
                            <Route exact path="/forgot-password" component={ForgotPassword}/>
                            <Route path="/reset-password" component={ResetPassword}/>
                        </Col>
                    </Router>
                </Row>
            </div>
        );
    }
}

export default App;
