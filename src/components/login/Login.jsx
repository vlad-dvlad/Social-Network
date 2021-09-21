import React from "react";
import {LoginReduxForm} from "./LoginForm";
import classes from "./login.module.scss";
import {connect} from "react-redux";
import {setLoginUser, setLogoutUser} from "../../redux/reducers/authReducer";
import {Redirect} from "react-router-dom";


const Login = (props) => {
    const onSubmit = (formData) => {
        props.setLoginUser(
            formData.email,
            formData.password,
            formData.checkbox,
        )
    };

    if(props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
      <div className={`${classes.login} ${classes.login__container}`}>
          <div className={`${classes.login__title}`}>Welcome to Cool network!</div>
          <LoginReduxForm onSubmit={onSubmit}/>
      </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
}


export default connect(mapStateToProps, {setLoginUser, setLogoutUser})(Login);
