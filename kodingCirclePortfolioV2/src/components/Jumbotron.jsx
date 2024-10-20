import React from 'react';
import iPhone from "../assets/images/iphone-14.jpg";
import HoldingIphone from "../assets/images/iphone-hand6.png";
//import HoldingIphone from "../assets/images/bg1.png";
import { Route, BrowserRouter as Router, Routes, redirect, NavLink } from "react-router-dom";
import '../css/index2.css';

function Jumbotron() {

    const handleLearnMore = () => {
        const element = document.querySelector(".sound-section");
        window.scrollTo({
            top: element?.getBoundingClientRect().top,
            left: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="jumbotron-section wrapper">
            <h2 className="title">👋 Hi,Welcome To</h2>
            <p className="text">KODING CIRCLE</p>
            <span className="description">
            We help businesses like yours grow by creating websites that highlight your brand and boost your online visibility
            </span>
            <ul className="links">
                <li>
                    <a className="link" onClick={handleLearnMore} >Learn more</a>
                </li>
                <li>
                <NavLink to='https://www.kodingcircle.in/about/' target="_blank">
                    <button className="button" >About Us</button>
                </NavLink>
                </li>
            </ul>
            <NavLink to='https://www.instagram.com/kodingcircle/' target="_blank">
            <img className="iphone-img" src={HoldingIphone} alt="iPhone" />
            </NavLink>
        </div>

    );
}

export default Jumbotron;

