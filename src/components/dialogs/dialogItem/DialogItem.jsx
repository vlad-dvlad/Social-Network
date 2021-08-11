import React from 'react';
import classes from '../dialogs.module.scss';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={classes.dialogs__dialog}>
            <div className={classes.person__avatar}>
                <img src="https://cdn.britannica.com/q:60/92/181392-050-08187DB5/cat-British-Shorthair-grey.jpg" alt=""/>
            </div>
            <div className={classes.person__name}>
                <NavLink className={classes.person__text} to={path}>{props.name}</NavLink>
            </div>
        </div>
    );
}


export default DialogItem;