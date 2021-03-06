import React from 'react';

import "./dashboard.css";


export default function AnswerFeedback(props) {

    return (
        <div>
            <div>
                <div className="answer-feedback">
                    {props.feedback}
                </div>
                <div>
                    <button className="next-button" onClick={() => props.onClick()}>
                        Next/Prochain
                </button>
                </div>
            </div>
        </div>
    );
}