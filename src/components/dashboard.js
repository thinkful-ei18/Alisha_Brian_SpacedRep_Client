import React from "react";
import { connect } from "react-redux";
import requiresLogin from "./requires-login";
import { Link } from "react-router-dom";
import { fetchQuestion } from "../actions/question";

export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchQuestion());
  }

  render() {
    
    return (
      <div>
        <div className="dashboard-username">
          Username: {this.props.username}
        </div>

        <div className="header">
          <h1>Let's Learn French!</h1>
          <p>
            Translate the word in the text box and hit submit to check your
            answer.
          </p>
        </div>
        <div>
          <h1>{this.props.question.question}</h1>
        </div>
        <input type="text" placeholder="your answer"></input>
        <button type="submit">Check Your Answer</button>
        <button>skip</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { currentUser } = state.auth;
  return {
    username: state.auth.currentUser.username,
    name: `${currentUser.firstName} ${currentUser.lastName}`,
    question: state.question.question
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
