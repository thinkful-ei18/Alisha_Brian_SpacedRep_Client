import React from "react";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';

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
    if (!this.props.loggedIn) {
      return <Redirect to='/' />
    }

    const isFeedback = this.state.feedback;


    return (
      <div className='dashboard-component'>

        <div className="dashboard-username">
          <p>Salut {this.props.username}!</p>
        </div>

        <div className="header">
          <h1 className="french-cta">Apprenons le français!</h1>
          <h3 className="english-cta">Let's Learn French!</h3>
          <h5 className="french-prompt">Quelle est la traduction en anglais de ce mot français?</h5>
          <h6 className="english-prompt">What is the English translation of the French word?</h6>
        </div>

        <div className="user-question">
          <h1>{this.props.question.question}</h1>
        </div>

        <div className="user-feedback">
          {isFeedback ? (<AnswerFeedback feedback={this.state.feedback} onClick={() => this.onNextQuestion()} />)
            : 
            (<AnswerButton onClick={input => this.onAnswerSubmit(input)}/>)
            }
        </div>
        
      </div>
    );
  }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    username: state.auth.currentUser ? state.auth.currentUser.username : null,
    question: state.question.question,
});

export default connect(mapStateToProps)(Dashboard);
