import React, {Component} from 'react';
import './App.css';
import {Col, Jumbotron} from 'react-bootstrap';
import {Router, Route} from 'react-router-dom';
import {history} from './helpers';
import {AdminPanel, ForgotPassword, Login, Register} from './components';
import {PrivateRoute} from "./components/PrivateRoute";

class App extends Component {
    render() {
        return (
            <Jumbotron>
                <div className="container">
                    <Col sm={8} smOffset={2}>
                        <Router history={history}>
                            <div>
                                <PrivateRoute exac path="/admin" roles={['admin']} component={AdminPanel}/>
                                <Route exact path="/login" component={Login}/>
                                <Route exact path="/register" component={Register}/>
                                <Route exact path="/forgot-password" component={ForgotPassword}/>
                            </div>
                        </Router>
                    </Col>
                </div>
            </Jumbotron>
        );
    }
}

export default App;
