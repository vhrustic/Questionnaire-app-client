import React, {Component} from 'react';
import {Glyphicon, Nav, Navbar, NavItem} from 'react-bootstrap'
import {getLoggedUser, redirectTo} from "../helpers";
import {connect} from "react-redux";
import {userActions} from "../store/actions";

class AppNavbar extends Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        const {dispatch} = this.props;
        dispatch(userActions.logout());
        redirectTo('/login');
    }

    componentDidMount() {
        const userObj = getLoggedUser();
        if (userObj) {
            const {dispatch} = this.props;
            dispatch(userActions.loginSuccess(userObj));
        }
    }

    render() {
        const {userObj} = this.props;
        const isLogged = Boolean(userObj.user.token);
        const homepageUrl = userObj.user.role === 'admin' ? '/admin' : '/dashboard';
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href={homepageUrl}>Questionnaire App</a>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        {!isLogged && <NavItem eventKey={1} href="/register">
                            Register
                        </NavItem>}
                        {!isLogged && <NavItem eventKey={2} href="/login">
                            <Glyphicon glyph="log-in"/> Login
                        </NavItem>}
                        {isLogged && <NavItem eventKey={2} onClick={this.handleLogout}>
                            <Glyphicon glyph="log-out"/> Logout
                        </NavItem>}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

const mapStateToProps = (state) => ({
    userObj: state.authentication
});

const connectedAppNavbar = connect(mapStateToProps)(AppNavbar);
export {connectedAppNavbar as AppNavbar};