import React from 'react';
import classes from './navbar.module.scss'

const Navbar = () => {
    return (
        <nav className={`${classes.navbar} ${classes.navbar__container}`}>
            <ul className={`${classes.list} ${classes.navbar__list}`}>
                <li><a href="/profile">Profile</a></li>
                <li><a href="/dialogs">Messages</a></li>
                <li><a href="/news">News</a></li>
                <li><a href="/music">Music</a></li>
                <li><a href="/settings">Settings</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;