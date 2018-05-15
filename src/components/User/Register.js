import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, Col, ControlLabel, FormControl, FormGroup} from 'react-bootstrap'
import {userActions} from "../../store/actions/index";


class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            email: '',
            password: '',
            confirmPassword: '',
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
        const {fullName, email, password, confirmPassword} = this.state;
        const {dispatch} = this.props;
        if (fullName && email && password && confirmPassword && password === confirmPassword) {
            dispatch(userActions.register(fullName, email, password));
        }
    }

    render() {
        const {fullName, email, password, confirmPassword} = this.state;
        return (
            <Col md={8} mdOffset={2}>
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

const connectedRegister = connect()(Register);
export {connectedRegister as Register};