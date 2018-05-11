import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, Col, ControlLabel, FormControl, FormGroup} from 'react-bootstrap'
import {userActions} from "../store/actions/";


class ForgotPassword extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: ''
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
        const {email} = this.state;
        const {dispatch} = this.props;
        if (email) {
            dispatch(userActions.forgotPassword(email));
        }
    }

    render() {
        const {email} = this.state;
        const {message, isSuccess} = this.props;
        return (
            <Col md={6} mdOffset={3}>
                <h2>Forgot password</h2>
                <p>{message}</p>
                <p>{isSuccess}</p>
                <form name="form" onSubmit={this.handleSubmit}>
                    <FormGroup controlId="formEmail">
                        <ControlLabel>Enter your email</ControlLabel>
                        <FormControl type="email" name="email" value={email} onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Button type="submit" bsStyle="primary">Send email</Button>
                    </FormGroup>
                </form>
            </Col>
        );
    }
}

function mapStateToProps(state) {
    const {message, isSuccess} = state.forgotPassword;
    return {
        message, isSuccess
    };
}

const connectedForgotPassword = connect(mapStateToProps)(ForgotPassword);
export {connectedForgotPassword as ForgotPassword};