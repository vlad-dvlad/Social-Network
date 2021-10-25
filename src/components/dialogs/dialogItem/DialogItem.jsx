import React from 'react';
import classes from '../dialogs.module.scss';
import {NavLink} from "react-router-dom";

const DialogItem = ({id, name}) => {
    let path = "/dialogs/" + id;
    return (
        <div className={classes.dialogs__dialog}>
            <div className={classes.person__avatar}>
                <img src="https://cdn.britannica.com/q:60/92/181392-050-08187DB5/cat-British-Shorthair-grey.jpg" alt=""/>
            </div>
            <div className={classes.person__name}>
                <NavLink className={classes.person__text} to={path}>{name}</NavLink>
            </div>
        </div>
    );
}


export default DialogItem;