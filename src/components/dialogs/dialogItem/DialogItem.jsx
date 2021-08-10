import React from 'react';
import classes from '../dialogs.module.scss';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={classes.dialogs__dialog}>
            <div className={classes.person__avatar}></div>
            <div className={classes.person__name}>
                <NavLink to={path}>{props.name}</NavLink>
            </div>
        </div>
    );
}


export default DialogItem;