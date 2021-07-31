import React from 'react';
import './navbar.scss'

const Navbar = () => {
    return (
        <nav className="navbar navbar__container">
            <ul className="list navbar__list">
                <li><a href="javascript:void(0);">Profile</a></li>
                <li><a href="javascript:void(0);">Messages</a></li>
                <li><a href="javascript:void(0);">News</a></li>
                <li><a href="javascript:void(0);">Music</a></li>
                <li><a href="javascript:void(0);">Settings</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;