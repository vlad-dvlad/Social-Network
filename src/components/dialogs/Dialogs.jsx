import React from 'react';
import classes from './dialogs.module.scss';
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";




const Dialogs = (props) => {

    let dialogsElement = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>);
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id}/>);

    const onSendMessage = (formData) => {
        console.log(formData);
        props.sendMessage(formData.newMessage);
    }

    if(!props.isAuth) {
        return <Redirect to={'/login'}/>
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
                            <DialogsReduxForm onSubmit={onSendMessage}/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

const DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field className={classes.messages__text} component={"textarea"}
                   name={"newMessage"} type={"text"}/>
            <button className={classes.messages__send}>Send</button>
        </form>
    );
}

const DialogsReduxForm = reduxForm( {form: 'sendMessage'} )(DialogsForm);

export default Dialogs;