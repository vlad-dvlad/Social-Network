import React from 'react';
import classes from '../dialogs.module.scss';


const Message = (props) => {
    return (
        <div className={classes.dialogs__message}>{props.message}</div>
    );
}

export default Message;