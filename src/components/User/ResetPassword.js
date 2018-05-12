import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Alert, Button, Col, ControlLabel, FormControl, FormGroup} from 'react-bootstrap'
import {userActions} from '../../store/actions/index';
import {Link} from 'react-router-dom';
import queryString from 'query-string';

class ResetPassword extends Component {
    constructor(props) {
        super(props);

        this.state = {
            password: '',
            confirmPassword: ''
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
        const {password, confirmPassword} = this.state;
        const {dispatch} = this.props;
        if (password && confirmPassword) {
            const token = queryString.parse(this.props.location.search).token;
            dispatch(userActions.resetPassword(token, password));
        }
    }

    render() {
        const {password, confirmPassword} = this.state;
        const {message, isSuccess} = this.props;
        return (
            <Col md={8} mdOffset={2}>
                <h2>Reset your password</h2>
                {(!isSuccess && message) && <Alert bsStyle="danger"><p>{message}</p></Alert>}
                {isSuccess &&
                <div>
                    <Alert bsStyle="info"><p>{message}</p></Alert> <Link to='/login'>Login page</Link>
                </div>}
                {!isSuccess &&
                <form name="form" onSubmit={this.handleSubmit}>
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
                        <Button type="submit" bsStyle="primary">Send email</Button>
                    </FormGroup>
                </form>}
            </Col>
        );
    }
}

const mapStateToProps = (state) => {
    const {message, isSuccess} = state.resetPassword;
    return {
        message, isSuccess
    };
};

const connectedRegisterPassword = connect(mapStateToProps)(ResetPassword);
export {connectedRegisterPassword as ResetPassword};