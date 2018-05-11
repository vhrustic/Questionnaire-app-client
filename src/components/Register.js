import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, Col, ControlLabel, FormControl, FormGroup} from 'react-bootstrap'
import {userActions} from "../store/actions/";


class Register extends Component {
    constructor(props) {
        super(props);

        // reset login status
        // this.props.dispatch(userActions.logout());

        this.state = {
            fullName: '',
            email: '',
            password: '',
            confirmPassword: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({submitted: true});
        const {fullName, email, password, confirmPassword} = this.state;
        const {dispatch} = this.props;
        if (fullName && email && password && confirmPassword) {
            dispatch(userActions.register(fullName, email, password));
        }
    }

    render() {
        const {loggingIn} = this.props;
        const {fullName, email, password, confirmPassword, submitted} = this.state;
        return (
            <Col md={6} mdOffset={3}>
                <h2>Register</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <FormGroup controlId="formFullName">
                        <ControlLabel>Full name</ControlLabel>
                        <FormControl type="text" name="fullName" value={fullName} onChange={this.handleChange}/>
                    </FormGroup>

                    <FormGroup controlId="formEmail">
                        <ControlLabel>Email</ControlLabel>
                        <FormControl type="email" name="email" value={email} onChange={this.handleChange}/>
                    </FormGroup>

                    <FormGroup controlId="formPassword">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl type="password" name="password" value={password} onChange={this.handleChange}/>
                    </FormGroup>

                    <FormGroup controlId="formConfirmPassword">
                        <ControlLabel>Confirm password</ControlLabel>
                        <FormControl type="password" name="confirmPassword" value={confirmPassword}
                                     onChange={this.handleChange}/>
                    </FormGroup>

                    <FormGroup>
                        <Button type="submit" bsStyle="primary">Register</Button>
                    </FormGroup>
                </form>
            </Col>
        );
    }
}

function mapStateToProps(state) {
    const {loggingIn} = state.authentication;
    return {
        loggingIn
    };
}

const connectedRegister = connect(mapStateToProps)(Register);
export {connectedRegister as Register};