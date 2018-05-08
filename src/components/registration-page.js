import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import RegistrationForm from './registration-form';

import './registration-page.css';

export function RegistrationPage(props) {
    // If we are logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    const style = {
        "textDecoration": "none",
        color: "#19227E"
    }

    return (
        <div className="registration-page">
            {/* <h4 className="register-prompt">Register your free account!</h4> */}
            <RegistrationForm />
            <Link to="/" style={style}>Login Here</Link>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);
