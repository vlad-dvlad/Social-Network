import React from 'react';
import loginStyles from "../../login/login.module.scss";
import errorsStyles from './controlForms.module.scss';
import postStyles from '../../profile/myPosts/myPosts.module.scss'
import {Field} from "redux-form";
import classNames from "classnames";

const ControlForms = ({meta:{touched, error}, children}) => {
    const hasErrors = touched && error;
    return (
        <div className={errorsStyles.validation__container}>
            <div className={classNames( {[errorsStyles.validation__field]: hasErrors} )}>
                { children }
            </div>
            <div className={errorsStyles.validation__message}>
                {hasErrors && <span>{error}</span>}
            </div>

        </div>
    );
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;

    return (
        <ControlForms {...props}>
                <input className={`${loginStyles.form__style}`}
                       {...input} {...restProps}/>
        </ControlForms>
    );
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;

    return (
        <ControlForms {...props}>
            <textarea className={postStyles.posts__text}
                {...input} {...restProps}/>
        </ControlForms>
    );
}

export const createField = (placeholder, name, validators, component, props={}, text = "") => {
    return (
        <Field placeholder={placeholder} type={name}
               component={component} name={name} validate={[...validators]}
               {...props}
        />
    );
}