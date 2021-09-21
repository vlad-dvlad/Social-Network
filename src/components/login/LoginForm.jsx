import React from "react";
import classes from "./login.module.scss";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Input} from "../common/controlForms/ControlForms";

const maxLength20 = maxLengthCreator(20);

const LoginForm = (props) => {

    return (
        <div className={`${classes.form} ${classes.form__container}`}>
            <form onSubmit={props.handleSubmit}>
                <div className={classes.form__email}>
                    <Field placeholder={"Email"} type={"email"}
                           component={Input} name={"email"} validate={[required, maxLength20]}/>
                </div>
                <div className={classes.form__password}>
                    <Field placeholder={"Password"} type={"password"}
                           component={Input} name={"password"} validate={[required, maxLength20]} />
                </div>
                <div className={classes.form__checkbox}>
                    <Field className={classes.form__checkbox_style}  type={"checkbox"} component={"input"} name={"checkbox"}/> Remember me
                </div>
                <div className={classes.form__btn}>
                    <button className={classes.form__btn_style}>Login</button>
                </div>
            </form>
        </div>

    );
}

export const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);
