import React from 'react';
import classes from '../dialogs.module.scss';


const Message = ({message}) => {
    return (
        <div className={classes.dialogs__message}>{message}</div>
    );
}

export default Message;