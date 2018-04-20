import React from 'react';
import { connect } from 'react-redux';
import { clearAuth, logout } from '../actions/auth';
import { clearAuthToken, clearUserCredentials } from '../local-storage';
import { Link } from "react-router-dom";

import './header-bar.css';

export class HeaderBar extends React.Component {
    logOut() {
        this.props.dispatch(logout())
        this.props.dispatch(clearAuth());

        clearAuthToken();
        clearUserCredentials()
    }

    render() {
        // Only render the log out button if we are logged in
        let logOutButton;
        if (this.props.loggedIn) {
            logOutButton = (
                <button onClick={() => this.logOut()} className="logout-button">Log out</button>
            );
        }
        return (
            <div className="header-bar-component">
                <Link to="/about">
          <button className="about-page-button">About Foodie Phonetics</button>
        </Link>
                {logOutButton}
                <h1 className="app-name">Foodie Phonetics</h1>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);
