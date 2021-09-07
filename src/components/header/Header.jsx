import React from 'react';
import classes from './header.module.scss';
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return (
        <header className={classes.header}>
            <div className={classes.header__container}>
                <div className={classes.header__logo}>
                    <img src={process.env.PUBLIC_URL + '/logo.png'} alt="" />
                </div>
                <div className={classes.header__title}>
                    <h1><a href="javascript:void(0);">Cool Network</a></h1>
                </div>
                <div className={classes.header__icon}>
                    <span></span>
                </div>
                <div className={classes.header__login}>
                    {
                        props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>
                    }

                </div>
            </div>
            
        </header>
    )
}

export default Header;