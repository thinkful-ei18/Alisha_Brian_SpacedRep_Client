import React from "react";
import { connect } from "react-redux";
import requiresLogin from "./requires-login";
import { Link } from "react-router-dom";
import { fetchQuestion, submitAnswer } from "../actions/question";
import AnswerButton from "./answer-button.js"
import AnswerFeedback from "./answer-feedback" 
import "./dashboard.css";

export class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        feedback:'',
        correctAnswer: null        
    };
  }
  
  componentDidMount() {
    this.props.dispatch(fetchQuestion());
  }
  onAnswerSubmit(input) {
    const answer = input.toLowerCase().trim();
    const correct = this.props.question.answer.toLowerCase();
    if (answer === correct) {
        this.setState({
            feedback: `C'est vrai! "${input}" is the correct translation of "${this.props.question.question}".`,
            correctAnswer: answer
          })
    } else {
        this.setState({
            feedback: `C'est faux. "${input}" is not correct. "${this.props.question.answer}" is the translation of "${this.props.question.question}"`,
            correctAnswer: answer  
        })
    }
  }
    onNextQuestion() {
      this.setState({
          feedback:'',
          correctAnswer: null
      })
      this.props.dispatch(submitAnswer(this.state.correctAnswer));
  }


  render() {
    const isFeedback = this.state.feedback;
    return (
      <div>
        <div className="dashboard-username">Salut {this.props.username}!</div>
        <div className="flag" />
        <div className="header">
          <h1>Apprenons le français!</h1>
          <h3>Let's Learn French!</h3>
          <h5>Quelle est la traduction en anglais de ce mot français?</h5>
          <h6>What is the English translation of the French word?</h6>
        </div>
        <div className="question">
          <h1>{this.props.question.question}</h1>
        </div>
                    {isFeedback ? (<AnswerFeedback feedback={this.state.feedback} onClick={() => this.onNextQuestion()} />)
                     : 
                     (<AnswerButton onClick={input => this.onAnswerSubmit(input)}/>)
                     }
        
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { currentUser } = state.auth;
  return {
    username: state.auth.currentUser.username,
    name: `${currentUser.firstName} ${currentUser.lastName}`,
    question: state.question.question,
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
