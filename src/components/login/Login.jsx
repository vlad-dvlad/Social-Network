import React from "react";
import LoginForm from "./LoginForm";
import classes from "./login.module.scss";

const Login = (props) => {

    return (
      <div className={`${classes.login} ${classes.login__container}`}>
          <div className={"login__title"}>Login</div>
          <LoginForm />
      </div>
    );
}

export default Login;
