import React from 'react';
import './Nav.css';
import logo from './../../assets/logo.png';

const Nav = () =>{
    return(
        <div className="nav-container">
            <div className="nav-left">
                <img className="flash-logo" src={logo} alt="logo" />
                <p className="flash-logo-text">flashtype</p>
            </div>
            <div className="nav-right">
                <a target="_blank" className="nav-developer-link" href="https://kaiwalyakoparkar.github.io/" rel="noreferrer">Developer</a>
            </div>
        </div>
    );
}

export default Nav;