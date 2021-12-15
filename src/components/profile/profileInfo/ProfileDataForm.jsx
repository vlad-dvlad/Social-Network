import classes from "../profile.module.scss";
import React from "react";
import {createField, Input, Textarea} from "../../common/controlForms/ControlForms";
import {reduxForm} from "redux-form";
import errors from "../../common/controlForms/controlForms.module.scss";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit} className={classes.profile__description}>
            <div>Full name: {createField("Full name", "fullName", [], Input)}</div>

            <div>Looking for a job: {createField("", "lookingForAJob", [], Input, {type: "checkbox"})}</div>
            <div>My professional skills:
                {createField("Skills", "lookingForAJobDescription", [], Textarea, {type: "checkbox"})}
            </div>
            <div>About Me: {createField("About me", "aboutMe", [], Input)}</div>
            <div>Contacts: {Object.keys(profile.contacts).map(key =>
                <div key={key}>{createField(key, "contacts." + key, [], Input)}</div>
            )}</div>
            {   error &&
            <div className={errors.validation__group}>
                {error}
            </div>
            }
            <button>Save</button>
        </form>
    );
}

const ProfileDataReduxForm = reduxForm({form: "editProfile"})(ProfileDataForm);

export default ProfileDataReduxForm;