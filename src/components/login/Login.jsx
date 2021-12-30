import React from "react";
import {LoginReduxForm} from "./LoginForm";
import styles from "./login.module.scss";
import {connect} from "react-redux";
import {getCaptchaUrl, setLoginUser, setLogoutUser} from "../../redux/reducers/authReducer";
import {Redirect} from "react-router-dom";
import classNames from "classnames";


const Login = ({isAuth, setLoginUser, captchaUrl}) => {
    const onSubmit = (formData) => {
        setLoginUser(
            formData.email,
            formData.password,
            formData.checkbox,
            formData.captcha,
        )
    };

    if(isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
      <div className={classNames(styles.login, styles.login__container)}>
          <div className={`${styles.login__title}`}>Welcome to Cool network!</div>
          <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
      </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl,
    }
}

export default connect(mapStateToProps, {setLoginUser, setLogoutUser, getCaptchaUrl})(Login);
