import React from 'react';

import "./dashboard.css";


export default function AnswerForm(props) {
    return (
        <div className="session-answer">
            <div className="session-answer-input-title">
                Please enter English translation below:
            </div>
            <div className="session-answer-input">
                    <input
                        type="text"
                        id='textInput' />
                <div>
                    <button className="submit-button" onClick={() => props.onClick(document.getElementById('textInput').value)}>
                    Submit/Soumettre
                    
                </button>
                </div>
            </div>
        </div>
    );
}