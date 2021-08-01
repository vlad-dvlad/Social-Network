import React from 'react';
import classes from './header.module.scss';


const Header = () => {
    return (
        <header className={`${classes.header} ${classes.header__container}`}>
            <div className={classes.header__logo}>
                <img src={process.env.PUBLIC_URL + '/logo.png'} alt="" />
            </div>
            <div className={classes.header__title}>
                <h1><a href="javascript:void(0);">Cool Network</a></h1>
            </div>
        </header>
    )
}

export default Header;