import React from 'react';
import styles from './navbar.module.scss'
import {NavLink} from "react-router-dom";
import Login from "../login/Login";
import classNames from "classnames";

const Navbar = ({isAuth, isShowedNavBar, setLogoutUser, showHideNavBar}) => {

    return (
        <nav className={classNames(styles.navbar, styles.navbar__menu, {[styles.active]: isShowedNavBar})}>
            <ul className={classNames(styles.navbar__list)}>
                <li onClick={() => showHideNavBar(false)}><NavLink to="/profile">Profile</NavLink></li>
                <li onClick={() => showHideNavBar(false)}><NavLink to="/dialogs">Messages</NavLink></li>
                <li onClick={() => showHideNavBar(false)}><NavLink to="/news">News</NavLink></li>
                <li onClick={() => showHideNavBar(false)}><NavLink to="/music">Music</NavLink></li>
                <li onClick={() => showHideNavBar(false)}><NavLink to="/users">Users</NavLink></li>
                <li onClick={() => showHideNavBar(false)}><NavLink to="/settings">Settings</NavLink></li>
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