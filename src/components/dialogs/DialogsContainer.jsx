import React from 'react';
import {inputMessage, sendMessage} from "../../redux/reducers/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        messages: state.dialogsPage.messages,
        messageText: state.dialogsPage.newMessageText,
    };
}

const AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, {
    sendMessage,
    inputMessage,
})(AuthRedirectComponent);

export default compose(
    connect(mapStateToProps, {sendMessage, inputMessage,}),
    withAuthRedirect
)(Dialogs);