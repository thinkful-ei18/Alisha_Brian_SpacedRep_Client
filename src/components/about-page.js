import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

export function AboutPage(props) {
  

    return (
        <div>
            <div className="app-description">
                <h2>Welcome to Foodie Phonetics, {this.props.username}!</h2>
                <span className="about-page">Foodie Phonetics is an application designed to help English speakers learn how to say their favorite foods in their new favorite language!</span>
                <span className="about-page">The application uses <strong>spaced repetition</strong> to make it easy for the user to quickly learn a variety of foods in the selected language.</span>
                <span>Spaced repetition is a method for efficient learning where the user practices concepts or skills over increasing periods of time. It's based on the notion of a "forgetting curve." With spaced repetition, the user stays ahead of the forgetting curve by practicing what he/she does not know more frequently than what he/she does.</span>
                <span className="about-page-inner"><strong>Foodie Phonetics</strong> uses the Spaced Repetition method by allowing the user to practice French Vocabulary according to its principles. A practice session revolves around a set of words in the selected language with the answer being the correct English translation. Every word the user translates correctly is pushed farther back in the list of words, while every word the user translates incorrectly remains near the beginning of the list.</span>
                <span>As a result, the user will be provided with the opportunity to review what he/she does not know more often until that word is "mastered" while those words already "mastered" by the user will appear much less frequently in order to test how well the user has retained the knowledge.</span>
                <span className="about-page"> Thank you for trying <strong>Foodie Phonetics!</strong></span>
            </div>
            <div className="return-link">
                <Link to="/dashboard">Return to Home Page</Link>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    username: state.auth.currentUser ? state.auth.currentUser.username : null,    
});

export default connect(mapStateToProps)(AboutPage);