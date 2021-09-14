import React from 'react';
import classes from './header.module.scss';
import {NavLink} from "react-router-dom";
import userPhoto from "../../assets/img/cat.png";
import Login from "../login/Login";


const Header = (props) => {
    return (
        <header className={classes.header}>
            <div className={classes.header__container}>
                <div className={classes.header__main}>
                    <div className={classes.header__logo}>
                        <img src={process.env.PUBLIC_URL + '/logo.png'} alt="" />
                    </div>
                    <div className={classes.header__title}>
                        <h1><a href="javascript:void(0);">Cool Network</a></h1>
                    </div>
                    <div className={classes.header__icon}>
                        <span></span>
                    </div>
                </div>



                <div className={`${classes.login} ${classes.login__container}`}>
                    <div className={ props.isAuth ? classes.login__photo : classes.login__notfoto}>
                        <img src={props.imgUrl != null ? props.imgUrl : userPhoto} alt=""/>
                    </div>
                    <div className={classes.login__link}>
                        {
                            props.isAuth ? props.login : <NavLink to={'/login'} render={ () => <Login />}>Login</NavLink>
                        }
                    </div>
                </div>

            </div>
        </header>
    )
}

export default Header;