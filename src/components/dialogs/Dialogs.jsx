import React from 'react';
import styles from './dialogs.module.scss';
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";
import {reduxForm} from "redux-form";
import {maxLengthCreator} from "../../utils/validators/validators";
import {createField, Textarea} from "../common/controlForms/ControlForms";
import classNames from "classnames";

const maxLength100 = maxLengthCreator(100);

const Dialogs = ({dialogs, messages, send}) => {

    const dialogsElement = dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>);
    const messagesElements = messages.map(m => <Message message={m.message} key={m.id}/>);

    const onSendMessage = (formData) => {
        send(formData.newMessage);
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogs__container}>
                <div className={styles.dialogs__items}>
                    {dialogsElement}
                </div>
                <div className={styles.dialogs__messages}>
                    <div>{messagesElements}</div>

                    {/*Create message*/}

                    <div className={classNames(styles.messages, styles.messages__container)}>
                        <div className={styles.messages__create}>
                            <DialogsReduxForm onSubmit={onSendMessage}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const DialogsForm = ({handleSubmit}) => {
    return (
        <form className={styles.messages__form} onSubmit={handleSubmit}>
            {createField("Type your message", "newMessage", [],
                Textarea, {}, "text", [styles.messages__text])}
            <button className={styles.messages__send}>Send</button>
        </form>
    );
}

const DialogsReduxForm = reduxForm( {form: "sendMessage"} )(DialogsForm);

export default Dialogs;