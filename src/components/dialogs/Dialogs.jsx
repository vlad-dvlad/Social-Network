import React from 'react';
import classes from './dialogs.module.scss';
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";
import MessageCreate from "./message/MessageCreate";

const Dialogs = (props) => {

    let dialogsElement = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.state.messages.map(m =>  <Message message={m.message}/>);


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs__container}>
                <div className={classes.dialogs__items}>
                    {dialogsElement}
                </div>
                <div className={classes.dialogs__messages}>
                    {messagesElements}
                    <MessageCreate />
                </div>
            </div>
        </div>
    );
}

export default Dialogs;