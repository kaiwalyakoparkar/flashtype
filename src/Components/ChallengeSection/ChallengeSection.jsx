import { render } from '@testing-library/react';
import React from 'react';
import TestContainer from './../TestContainer/TestContainer';
import './ChallengeSection.css';

const ChallengeSection = () => {
    return(
        <div className="challenge-section-container">
            <h1 data-aos="fade-down" className="challenge-section-header">Take the spead test now</h1>
            <TestContainer words="4" characters="14" wpm="20"/>
        </div>
    );
}

export default ChallengeSection;