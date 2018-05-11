import React, {Component} from 'react';
import './App.css';
import {Col, Jumbotron} from 'react-bootstrap';
import {Router, Route} from 'react-router-dom';
import {history} from './helpers';
import {Login, Register} from './containers';

class App extends Component {
    render() {
        return (
            <Jumbotron>
                <div className="container">
                    <Col sm={8} smOffset={2}>
                        <Router history={history}>
                            <div>
                                <Route exact path="/login" component={Login}/>
                                <Route exact path="/register" component={Register}/>
                            </div>
                        </Router>
                    </Col>
                </div>
            </Jumbotron>
        );
    }
}

export default App;
