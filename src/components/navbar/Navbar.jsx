import React from 'react';
import styles from './navbar.module.scss'
import {NavLink} from "react-router-dom";
import Login from "../login/Login";
import classNames from "classnames";

const Navbar = ({isAuth, isHiddenNavBar, setLogoutUser, showHideNavBar}) => {

    if(isHiddenNavBar) {
        // NavBar hide () => showHideNavBar
    }



    return (
        <nav className={classNames(styles.navbar, styles.navbar__menu)}>
            <ul className={classNames(styles.navbar__list)}>
                <li><NavLink to="/profile">Profile</NavLink></li>
                <li><NavLink to="/dialogs">Messages</NavLink></li>
                <li><NavLink to="/news">News</NavLink></li>
                <li><NavLink to="/music">Music</NavLink></li>
                <li><NavLink to="/users">Users</NavLink></li>
                <li><NavLink to="/settings">Settings</NavLink></li>
            </ul>

            <div className={classNames(styles.login__link)}>
                {
                    isAuth
                        ? <div onClick={setLogoutUser} className={classNames(styles.login__exit)}>Logout</div>
                        : <NavLink to={'/login'} render={ () => <Login />}>Login</NavLink>
                }
            </div>
        </nav>
    );
}

export default Navbar;