import React from 'react';
import styles from './header.module.scss';
import {NavLink} from "react-router-dom";
import userPhoto from "../../assets/img/cat.png";
import classNames from "classnames";
import MenuBurger from "../common/menu/MenuBurger";

const Header = ({isAuth, imgUrl, isShowedNavBar, showHideNavBar}) => {
    return (
        <header className={classNames(styles.header, "container-fluid", "p-0")}>
            <div className={classNames(styles.header__container, "row")}>
                <div className={classNames(styles.header__main, "col-lg-6", "col-4", "justify-content-lg-start", "justify-content-md-center",
                    "justify-content-center", "p-0")}>
                    <div className={styles.header__title}>
                        <h1><NavLink to="/">Cool Network</NavLink></h1>
                    </div>
                </div>



                <div className={classNames(styles.login, styles.login__container, "col-lg-6", "col-4", "justify-content-lg-end",
                     "p-0")}>
                    <div className={ isAuth ? styles.login__photo : styles.login__notfoto}>
                        <img src={imgUrl != null ? imgUrl : userPhoto} alt=""/>
                    </div>
                </div>

                <div className={classNames(styles.header__menu, "col-4", "justify-content-end", "p-0")}>
{/*                    <div className={classNames(styles.header__icon)} >
                        <span></span>
                    </div>*/}
                    <MenuBurger isShowedNavBar={isShowedNavBar} showHideNavBar={showHideNavBar}/>
                </div>

            </div>
        </header>
    )
}

export default Header;