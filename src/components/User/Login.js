import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, Col, ControlLabel, FormControl, FormGroup} from 'react-bootstrap'
import {userActions} from "../../store/actions/index";
import {Link} from "react-router-dom";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.responseFacebook = this.responseFacebook.bind(this);
    }

    handleChange(e) {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({submitted: true});
        const {email, password} = this.state;
        const {dispatch} = this.props;
        if (email && password) {
            dispatch(userActions.login(email, password));
        }
    }

    responseFacebook(params) {
        const {dispatch} = this.props;
        dispatch(userActions.fbLogin(params.accessToken));
    }

    render() {
        const {email, password} = this.state;
        return (
            <Col md={8} mdOffset={2}>
                <h2>Login</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <FormGroup controlId="formEmail">
                        <ControlLabel>Email</ControlLabel>
                        <FormControl type="email" name="email" value={email} onChange={this.handleChange}/>
                    </FormGroup>

                    <FormGroup controlId="formPassword">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl type="password" name="password" value={password} onChange={this.handleChange}/>
                    </FormGroup>


                    <FormGroup>
                        <Button type="submit" bsStyle="success" style={{marginRight: '10px'}}>Login</Button>
                        <FacebookLogin
                            appId="356869268168181"
                            autoLoad={false}
                            fields="name,email"
                            callback={this.responseFacebook}
                            render={renderProps => (
                                <Button bsStyle="primary" onClick={renderProps.onClick}>Login with Facebook</Button>
                            )}
                        />
                        <Link to='/forgot-password' className="pull-right">Forgot password</Link>
                    </FormGroup>
                </form>
            </Col>
        );
    }
}

const connectedLogin = connect()(Login);
export {connectedLogin as Login};