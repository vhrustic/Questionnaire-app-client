import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Alert, Button, Col, ControlLabel, FormControl, FormGroup} from 'react-bootstrap'
import {userActions} from "../store/actions/";
import {Link} from "react-router-dom";


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
            <Col md={8} mdOffset={2}>
                <h2>Forgot password</h2>
                {(!isSuccess && message) && <Alert bsStyle="danger"><p>{message}</p></Alert>}
                {isSuccess &&
                <div>
                    <Alert bsStyle="info"><p>{message}</p></Alert> <Link to='/'>Home</Link>
                </div>}
                {!isSuccess &&
                <form name="form" onSubmit={this.handleSubmit}>
                    <FormGroup controlId="formEmail">
                        <ControlLabel>Enter your email</ControlLabel>
                        <FormControl type="email" name="email" value={email} onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Button type="submit" bsStyle="primary">Send email</Button>
                    </FormGroup>
                </form>}
            </Col>
        );
    }
}

const mapStateToProps = (state) => {
    const {message, isSuccess} = state.forgotPassword;
    return {
        message, isSuccess
    };
}

const connectedForgotPassword = connect(mapStateToProps)(ForgotPassword);
export {connectedForgotPassword as ForgotPassword};