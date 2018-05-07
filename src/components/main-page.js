import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchQuestions } from "../actions/questions";

export class MainPage extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchQuestions());
  }

  render() {
    return (
      <div>
        <div>
          <h1>Let's Learn French!</h1>
          <p>
            Translate the word in the text box and hit submit to check your
            answer.
          </p>
        </div>
        <div className="question">
          console.log(this.props.questions)
          <h1>{this.props.questions}</h1>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  questions: state.question.questions
});

export default connect(mapStateToProps);
