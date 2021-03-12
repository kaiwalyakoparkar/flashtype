import React from 'react';
import './TypingChallenge.css';

const TypingChallenge = ({selectedParagraph, timeRemaining, timerStarted}) => {
    return(
        <div className="typing-challenge">
            <div className="timer-container">
                <p className="timer">00:
                    {timeRemaining >= 10 ? timeRemaining:`0${timeRemaining}`
                }
                </p>
                <p className="timer-info">
                    {!timerStarted && "Start typing to start the test"}
                </p>
            </div>
            <div className="text-area-container">
                <div className="text-area-left">
                    <div className="text-area test-paragraph">
                        {selectedParagraph}
                    </div>
                </div>

                <div className="text-area-right">
                    <textarea
                        className="text-area"
                        placeholder="start typing here"
                    >
                    </textarea>
                </div>
            </div>
        </div>
    );
}

export default TypingChallenge;