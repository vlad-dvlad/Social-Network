import React from 'react';
import styles from './navbar.module.scss'
import {NavLink} from "react-router-dom";
import Login from "../login/Login";

const Navbar = (props) => {
    return (
        <nav className={`${styles.navbar} ${styles.navbar__container}`}>
            <ul className={`${styles.list} ${styles.navbar__list}`}>
                <li><NavLink to="/profile">Profile</NavLink></li>
                <li><NavLink to="/dialogs">Messages</NavLink></li>
                <li><NavLink to="/news">News</NavLink></li>
                <li><NavLink to="/music">Music</NavLink></li>
                <li><NavLink to="/users">Users</NavLink></li>
                <li><NavLink to="/settings">Settings</NavLink></li>
            </ul>

            <div className={styles.login__link}>
                {
                    props.isAuth
                        ? <div onClick={props.setLogoutUser} className={styles.login__exit}>Logout</div>
                        : <NavLink to={'/login'} render={ () => <Login />}>Login</NavLink>
                }
            </div>
        </nav>
    );
}

export default Navbar;