import React, {Component} from 'react';
import {Button, PageHeader} from 'react-bootstrap'
import {connect} from "react-redux";
import {redirectTo} from "../helpers";

class Homepage extends Component {
    render() {
        const userObj = this.props.userObj.user;
        const isLogged = Boolean(userObj.token);
        const userRole = userObj.user.role;
        return (
          <div>
            <PageHeader>Welcome to questionnaire app!</PageHeader>
            {!isLogged && (
              <Button
                bsStyle="primary"
                onClick={() => {
                  redirectTo("/register");
                }}
              >
                Register
              </Button>
            )}

            {!isLogged && (
              <Button
                bsStyle="primary"
                onClick={() => {
                  redirectTo("/login");
                }}
              >
                Login
              </Button>
            )}
            {userRole === "admin" && (
              <Button
                bsStyle="success"
                onClick={() => {
                  redirectTo("/admin");
                }}
              >
                Admin panel
              </Button>
            )}
            {userRole === "user" && (
              <Button
                bsStyle="success"
                onClick={() => {
                  redirectTo("/dashboard");
                }}
              >
                User dashboard
              </Button>
            )}
          </div>
        );
    }
}

const mapStateToProps = (state) => ({
    userObj: state.authentication
});

const connectedHomepage = connect(mapStateToProps)(Homepage);
export {connectedHomepage as Homepage};