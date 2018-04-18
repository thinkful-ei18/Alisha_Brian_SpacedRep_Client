import React from 'react';

export default function AnswerFeedback(props) {

    return (
        <div>
            <div>
                <div className="answer-feedback">
                    {props.feedback}
                </div>
                <div>
                    <button className="button" onClick={() => props.onClick()}>
                        Next/Prochain
                </button>
                </div>
            </div>
        </div>
    );
}