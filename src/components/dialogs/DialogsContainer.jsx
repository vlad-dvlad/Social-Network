import React from 'react';
import {inputMessageActionCreator, sendMessageActionCreator} from "../../redux/reducers/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        messages: state.dialogsPage.messages,
        messageText: state.dialogsPage.newMessageText
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        },
        inputMessage: (message) => {
            let action = inputMessageActionCreator(message);
            dispatch(action);
        },
    };
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;