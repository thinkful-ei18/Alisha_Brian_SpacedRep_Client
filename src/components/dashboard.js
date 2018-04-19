import React from "react";
import { connect } from "react-redux";

import { fetchQuestion, submitAnswer } from "../actions/question";
import { setAuthToken, authSuccess } from '../actions/auth'
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

  componentWillMount() {
      console.log('component will mount');
      if (localStorage.getItem('authToken')) {
          let authToken = localStorage.getItem('authToken');
          let user = JSON.parse(localStorage.getItem('user'));
          // user = JSON.parse(user);
          console.log('user:', user)

          this.props.dispatch(setAuthToken(authToken));
          this.props.dispatch(authSuccess(user));
      }
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
    console.log('props:', this.props);

    return (
      <div>
        <div className="dashboard-username">
          <p>Salut {this.props.username}!</p>
        </div>
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
  console.log('state:', state);
  // const { currentUser } = state.auth; 
  // console.log('CU:', {currentUser});

  return {
    // username: state.auth.currentUser.username,
    // name: `${currentUser.firstName} ${currentUser.lastName}`,
    question: state.question.question,
  };
};

// const mapStateToProps = state => ({
  // username: state.auth.currentUser.username,
//   question: state.question.question,
// });

export default (connect(mapStateToProps)(Dashboard));
