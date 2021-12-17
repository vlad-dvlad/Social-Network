import React from 'react';
import styles from './header.module.scss';
import {NavLink} from "react-router-dom";
import userPhoto from "../../assets/img/cat.png";
import Login from "../login/Login";
import classNames from "classnames";



const Header = (props) => {
    return (
        <header className={classNames(styles.header, "container-fluid", "p-0")}>
            <div className={classNames(styles.header__container, "row")}>
                <div className={classNames(styles.header__main, "col-lg-6", "col-4", "p-0")}>
                    <div className={styles.header__title}>
                        <h1><NavLink to="/">Cool Network</NavLink></h1>
                    </div>
                </div>



                <div className={classNames(styles.login, styles.login__container, "col-lg-6", "col-4", "justify-content-lg-end",
                    "justify-content-center", "p-0")}>
                    <div className={ props.isAuth ? styles.login__photo : styles.login__notfoto}>
                        <img src={props.imgUrl != null ? props.imgUrl : userPhoto} alt=""/>
                    </div>
                    <div className={styles.login__link}>
                        {
                            props.isAuth
                                ? <div onClick={props.setLogoutUser} className={styles.login__exit}>Logout</div>
                                : <NavLink to={'/login'} render={ () => <Login />}>Login</NavLink>
                        }
                    </div>
                </div>

                <div className={classNames(styles.header__menu, "col-4", "justify-content-end", "p-0")}>
                    <div className={classNames(styles.header__icon)}>
                        <span></span>
                    </div>
                </div>

            </div>
        </header>
    )
}

export default Header;