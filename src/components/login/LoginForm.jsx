import React from "react";
import classes from "./login.module.scss";
import {Field, reduxForm} from "redux-form";


const LoginForm = (props) => {
    return (
        <div className={`${classes.form} ${classes.form__container}`}>
            <form onSubmit={props.handleSubmit}>
                <div className={classes.form__login}>
                    <Field className={classes.form__style} placeholder={"Login"} type={"text"} component={"input"} name={"login"}/>
                </div>
                <div className={classes.form__password}>
                    <Field className={classes.form__style} placeholder={"Password"} type={"password"} component={"input"} name={"password"}/>
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

export default LoginForm;