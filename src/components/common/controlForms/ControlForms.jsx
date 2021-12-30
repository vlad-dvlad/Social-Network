import React from 'react';
import errorsStyles from './controlForms.module.scss';
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
    const {input, meta, child, styles, ...restProps} = props;

    //`${loginStyles.form__style}`

    return (
        <ControlForms {...props}>
                <input className={classNames(styles)}
                       {...input} {...restProps}/>
        </ControlForms>
    );
}

export const Textarea = (props) => {
    const {input, meta, child, styles, ...restProps} = props;

    return (
        <ControlForms {...props}>
            <textarea className={classNames(styles)}
                {...input} {...restProps}/>
        </ControlForms>
    );
}

export const createField = (placeholder, name, validators, component, props={},
                            type="text", styles=[], text = "") => {
    return (
        <Field placeholder={placeholder} type={type}
               component={component} name={name} validate={[...validators]}
               styles={styles}
               {...props}
        />
    );
}