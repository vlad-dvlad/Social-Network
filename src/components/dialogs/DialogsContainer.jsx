import React from 'react';
import {inputMessage, sendMessage} from "../../redux/reducers/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        messages: state.dialogsPage.messages,
        messageText: state.dialogsPage.newMessageText
    };
}

const DialogsContainer = connect(mapStateToProps, {
    sendMessage: sendMessage,
    inputMessage: inputMessage,
})(Dialogs);

export default DialogsContainer;