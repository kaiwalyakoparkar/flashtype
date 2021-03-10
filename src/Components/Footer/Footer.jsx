import React from 'react';
import './Footer.css';

const Footer = () =>{
    return(
        <div className="footer-container">
            <a href="https://github.com/kaiwalyakoparkar/flashtype" className="footer-link" target="_blank" rel="norefferer">Fork on GitHub | </a>
            <a href="https://linkedin.com/in/kaiwalyakoparkar/" className="footer-link" target="_blank" rel="norefferer">LinkedIn | </a>
            <a href="https://twitter.com/kaiwalya_13/" className="footer-link" target="_blank" rel="norefferer">Twitter</a>
        </div>
    );
}

export default Footer;