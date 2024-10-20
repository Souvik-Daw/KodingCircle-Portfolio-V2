import React from 'react';
import { Route, BrowserRouter as Router, Routes, redirect, NavLink } from "react-router-dom";
import '../css/index2.css';

function DisplaySection() {

    const handleScrollToTop= () =>{
        window.scrollTo({top:0,left:0,behavior:"smooth"})
    }

    return (
        <div className="display-section wrapper"> 
            <h2 className="title">Know us more</h2>
            <p className="text">Contact us today</p>
            <span className="description">
                To transform your business into an something more
            </span>
            <NavLink to='https://www.kodingcircle.in/contact' target="_blank">
            <button
                className="button">Contact us</button>
            </NavLink>
            <button className="back-button" onClick={handleScrollToTop}>TOP</button>
        </div>
    );
}

export default DisplaySection;

