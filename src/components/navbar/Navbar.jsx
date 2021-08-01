import React from 'react';
import classes from './navbar.module.scss'

const Navbar = () => {
    return (
        <nav className={`${classes.navbar} ${classes.navbar__container}`}>
            <ul className={`${classes.list} ${classes.navbar__list}`}>
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