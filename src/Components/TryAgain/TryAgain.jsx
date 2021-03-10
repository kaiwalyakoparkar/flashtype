import React from 'react';
import './TryAgain.css';

const TryAgain = ({words,characters,wpm}) => {
    return(
        <div className="try-again-container">
            <h1>Test Results</h1>
            <div className="result-container">
                <p>
                    <b>Characters </b>{characters}
                </p>
                <p>
                    <b>Words </b>{words}
                </p>
                <p>
                    <b>Speed </b>{wpm}
                </p>
            </div>

            <div>
                <button className="end-btn start-again-btn"
                >
                    Re-try
                </button>

                <button 
                onClick={()=>{
                    window.open("https://www.facebook.com/sharer/sharer.php?u=https://github.com/kaiwalyakoparkar/flashtype/", "facebook-share-dialog","width=800, hight-600")
                }}
                className="end-btn share-btn"
                >
                    Facebook
                </button>

                <button 
                    onClick={()=>{
                    window.open("https://twitter.com/intent/tweet?https://kaiwalyakopakar.github.io/flashtype", "twitter-share-dialog","width=800, hight-600")
                    }}
                    className="end-btn tweet-btn"
                >
                    Twitter
                </button>

            </div>
        </div>
    );
}

export default TryAgain;