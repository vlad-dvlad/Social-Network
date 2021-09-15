import React from "react";
import {LoginReduxForm} from "./LoginForm";
import classes from "./login.module.scss";



const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    };

    return (
      <div className={`${classes.login} ${classes.login__container}`}>
          <div className={`${classes.login__title}`}>Welcome to Cool network!</div>
          <LoginReduxForm onSubmit={onSubmit}/>
      </div>
    );
}

export default Login;
