import React from 'react';
import { Route, BrowserRouter as Router, Routes, redirect, NavLink } from "react-router-dom";
import '../css/index2.css';

function SoundSection() {

    const handleLearnMore = () => {
        const element = document.querySelector(".display-section");
        window.scrollTo({
            top: element?.getBoundingClientRect().bottom,
            left: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="sound-section wrapper">
            <div className="body">
                <div className='sound-section-content content' >
                    <p className="text">Are You The One Who Is</p>
                    <span className="description">
                        &#9989;Not reaching the right customers?
                    </span>
                    <span className="description">
                        &#9989;Struggling to differentiate your brand?
                    </span>
                    <span className="description">
                        &#9989;Unable to handle customer demand during peak traffic?
                    </span>
                    <br></br>
                    <h2 className="title"><b>But,Don’t Worry!! We are here for you!!</b>
                    </h2>
                    <ul className="links">
                        <NavLink to='https://www.kodingcircle.in/Portfolio' target="_blank">
                            <li>
                                <a className="button"> Portfolio</a>
                            </li>
                        </NavLink>
                        <NavLink to='https://www.kodingcircle.in/review' target="_blank">
                            <li>
                                <a className="button">Review</a>
                            </li>
                        </NavLink>
                        {/* <li>
                            <a className="button" onClick={handleLearnMore} >Learn More</a>
                        </li> */}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SoundSection;

