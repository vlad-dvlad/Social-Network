import React from "react";
import classes from "./login.module.scss";
import errors from "../common/controlForms/controlForms.module.scss";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Input} from "../common/controlForms/ControlForms";

const maxLength40 = maxLengthCreator(40);

const LoginForm = ({handleSubmit, error, captchaUrl}) => {

    return (
        <div className={`${classes.form} ${classes.form__container}`}>
            <form onSubmit={handleSubmit}>
                <div className={classes.form__email}>
                    <Field placeholder={"Email"} type={"email"}
                           component={Input} name={"email"} validate={[required, maxLength40]}/>
                </div>
                <div className={classes.form__password}>
                    <Field placeholder={"Password"} type={"password"}
                           component={Input} name={"password"} validate={[required, maxLength40]} />
                </div>
                <div className={classes.form__checkbox}>
                    <Field className={classes.form__checkbox_style}  type={"checkbox"} component={"input"} name={"checkbox"}/> Remember me
                </div>
                {
                    captchaUrl && <img src={captchaUrl} alt=""/>
                }
                {
                    captchaUrl &&
                    <Field className={classes.form__email}  type={"text"} component={Input} name={"captcha"} validate={[required]}/>

                }
                {   error &&
                    <div className={errors.validation__group}>
                        {error}
                    </div>
                }
                <div className={classes.form__btn}>
                    <button className={classes.form__btn_style}>Login</button>
                </div>
            </form>
        </div>

    );
}

export const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);
