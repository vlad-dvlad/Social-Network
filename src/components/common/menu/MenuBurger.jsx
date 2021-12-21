import React, {useState} from 'react';
import classNames from "classnames";
import styles from "../../header/header.module.scss";

const MenuBurger = ({isShowedNavBar, showHideNavBar}) => {

    const [isToggleOn, setToggle] = useState(false);

    const showHideMenu = () => {
        setToggle(!isToggleOn);
        showHideNavBar(isToggleOn);
    }

    return (
        <div onClick={showHideMenu} className={classNames(styles.header__icon, {[styles.active]: isShowedNavBar})} >
            <span></span>
        </div>
    );
};

export default MenuBurger;