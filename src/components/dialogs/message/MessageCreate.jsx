import React from 'react';
import classes from '../dialogs.module.scss';
import {inputMessageActionCreator, sendMessageActionCreator} from "../../../redux/reducers/dialogsReducer";


const MessageCreate = (props) => {

    let newMessage = React.createRef();

    const sendMessage = () => {
        props.dispatch(sendMessageActionCreator());
    }

    const inputMessage = () => {
        let message = newMessage.current.value;

        props.dispatch(inputMessageActionCreator(message));
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