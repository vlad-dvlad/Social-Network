import React from 'react';
import classes from '../dialogs.module.scss';

const MessageCreate = (props) => {

    let newMessage = React.createRef();

    const sendMessage = () => {
        props.sendMessage();
    }

    const inputMessage = () => {
        let message = newMessage.current.value;
        props.inputMessage(message);
    }

    return(
        <div className={`${classes.messages} ${classes.messages__container}`}>
            <div className={classes.messages__create}>
                <textarea onChange={inputMessage} className={classes.messages__text}
                          ref={newMessage} value={props.newMessageText}/>
                <button className={classes.messages__send} onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
}

export default MessageCreate;