import React, {Component} from 'react';
import {Glyphicon, Nav, Navbar, NavItem} from 'react-bootstrap'

class AppNavbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">Questionnaire App</a>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="#">
                            Questionnaires
                        </NavItem>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">
                            Register
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            <Glyphicon glyph="log-in"/> Login
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            <Glyphicon glyph="log-out"/> Logout
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export {AppNavbar};