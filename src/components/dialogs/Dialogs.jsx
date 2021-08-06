import React from 'react';
import classes from './dialogs.module.scss';
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

const Message = (props) => {
    return (
        <div className={classes.dialogs__message}>{props.message}</div>
    );
}

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs__container}>
                <div className={classes.dialogs__items}>
                    <DialogItem name="Viktor" id="1"/>
                    <DialogItem name="Dasha" id="2"/>
                    <DialogItem name="Andrew" id="3"/>
                    <DialogItem name="Roman" id="4"/>
                </div>
                <div className={classes.dialogs__messages}>
                    <Message message="This is message"/>
                    <Message message="Yo"/>
                    <Message message="Hi"/>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;