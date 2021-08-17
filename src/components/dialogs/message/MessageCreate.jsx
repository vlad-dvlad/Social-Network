import React from 'react';
import classes from '../dialogs.module.scss';

const MessageCreate = (props) => {

    let newMessage = React.createRef();

    const sendMessage = () => {
        let message = newMessage.current.value;
        alert(message)
    }

    return(
        <div className={`${classes.messages} ${classes.messages__container}`}>
            <div className={classes.messages__create}>
                <textarea className={classes.messages__text} ref={newMessage}></textarea>
                <button className={classes.messages__send} onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
}

export default MessageCreate;