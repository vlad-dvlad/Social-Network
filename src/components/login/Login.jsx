import React from "react";
import {LoginReduxForm} from "./LoginForm";
import classes from "./login.module.scss";
import {connect} from "react-redux";
import {setLoginUser} from "../../redux/reducers/authReducer";


const Login = (props) => {
    const onSubmit = (formData) => {
        props.setLoginUser(
            formData.email,
            formData.password,
            formData.checkbox,
        )
    };

    return (
      <div className={`${classes.login} ${classes.login__container}`}>
          <div className={`${classes.login__title}`}>Welcome to Cool network!</div>
          <LoginReduxForm onSubmit={onSubmit}/>
      </div>
    );
}

const mapStateToProps = (state) => {
    return {

    }
}



export default connect(mapStateToProps, {setLoginUser})(Login);
