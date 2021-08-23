import React from 'react';

import {inputMessageActionCreator, sendMessageActionCreator} from "../../redux/reducers/dialogsReducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    let state = props.store.getState();

    const sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator());
    }

    const inputMessage = (message) => {
        let action = inputMessageActionCreator(message);
        props.store.dispatch(action);
    }

    return (
        <Dialogs dialogState={state.dialogsPage} messageText={state.dialogsPage.newMessageText}
                 sendMessage={sendMessage} inputMessage={inputMessage}/>
    )
}

export default DialogsContainer;