import React from "react";
import styles from "./login.module.scss";
import errors from "../common/controlForms/controlForms.module.scss";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {createField, Input} from "../common/controlForms/ControlForms";
import classNames from "classnames";
const maxLength40 = maxLengthCreator(40);

const LoginForm = ({handleSubmit, error, captchaUrl}) => {

    return (
        <div className={classNames(styles.form, styles.form__container)}>
            <form onSubmit={handleSubmit}>
                <div className={styles.form__email}>
                    {createField("Email", "email",[required, maxLength40], Input, {}, "email", [styles.form__style] )}
                </div>
                <div className={styles.form__password}>
                    {createField("Password", "password", [required, maxLength40], Input,{}, "password",[styles.form__style])}
                </div>
                <div className={styles.form__checkbox}>
                    <Field className={styles.form__checkbox_style}  type={"checkbox"} component={"input"} name={"checkbox"}/> Remember me
                </div>
                {
                    captchaUrl && <img src={captchaUrl} alt=""/>
                }
                {
                    captchaUrl &&
                    <Field className={styles.form__email}  type={"text"} component={Input} name={"captcha"} validate={[required]}/>
                }
                {   error &&
                    <div className={errors.validation__group}>
                        {error}
                    </div>
                }
                <div className={styles.form__btn}>
                    <button className={styles.form__btn_style}>Login</button>
                </div>
            </form>
        </div>

    );
}

export const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);
