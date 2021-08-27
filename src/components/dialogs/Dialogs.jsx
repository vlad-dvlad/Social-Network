import React from 'react';
import classes from './dialogs.module.scss';
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";



const Dialogs = (props) => {

    let dialogsElement = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>);
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id}/>);

    let newMessage = React.createRef();

    const onSendMessage = () => {
        debugger;
        props.sendMessage();
    }

    const onInputMessage = () => {
        let message = newMessage.current.value;
        props.inputMessage(message)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs__container}>
                <div className={classes.dialogs__items}>
                    {dialogsElement}
                </div>
                <div className={classes.dialogs__messages}>
                    {messagesElements}

                    {/*Create message*/}

                    <div className={`${classes.messages} ${classes.messages__container}`}>
                        <div className={classes.messages__create}>
                            <textarea onChange={onInputMessage} className={classes.messages__text}
                                      ref={newMessage} value={props.messageText}/>
                            <button className={classes.messages__send} onClick={onSendMessage}>Send</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Dialogs;