import React from 'react';
import classes from "../../login/login.module.scss";
import errorsStyles from './controlForms.module.scss';

const ControlForms = ({input, meta, child, ...props}) => {
    const hasErrors = meta.touched && meta.error;
    return (
        <div className={errorsStyles.validation__container}>
            <div className={(hasErrors ? errorsStyles.validation__field : "")}>
                { props.children }
            </div>
            <div className={errorsStyles.validation__message}>
                {hasErrors && <span>{meta.error}</span>}
            </div>

        </div>
    );
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;

    return (
        <ControlForms {...props}>
                <input className={`${classes.form__style}`}
                       {...input} {...restProps}/>
        </ControlForms>
    );
}

export const PostText = (props) => {
    const {input, meta, child, ...restProps} = props;

    return (
        <ControlForms {...props}>
            <textarea />
        </ControlForms>
    );
}