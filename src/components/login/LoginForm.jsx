import React from "react";
import classes from "./login.module.scss";

const LoginForm = () => {
    return (
        <div className={`${classes.form} ${classes.form__container}`}>
            <form>
                <div className={classes.form__login}>
                    <input className={classes.form__style} placeholder={"Login"} type={"text"}/>
                </div>
                <div className={classes.form__password}>
                    <input className={classes.form__style} placeholder={"Password"} type={"password"}/>
                </div>
                <div className={classes.form__checkbox}>
                    <input className={classes.form__checkbox_style}  type={"checkbox"}/> Remember me
                </div>
                <div className={classes.form__btn}>
                    <button className={classes.form__btn_style}>Login</button>
                </div>
            </form>
        </div>

    );
}

export default LoginForm;