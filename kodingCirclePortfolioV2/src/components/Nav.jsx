import React from 'react';
import Logo from '../assets/images/logo.svg'

function Nav() {
    return (
        <nav className='nav-wrapper'>
            <div className='nav-content'>
                <ul className="list-styled">
                    <li>
                        <img src={Logo} alt="KC"/>
                    </li>
                    <li>
                        <a className="link-styled">About</a>
                    </li>
                    <li>
                        <a className="link-styled">Projects</a>
                    </li>
                    <li>
                        <a className="link-styled">Testimonials</a>
                    </li>
                    <li>
                        <a className="link-styled">Contact Us</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;

