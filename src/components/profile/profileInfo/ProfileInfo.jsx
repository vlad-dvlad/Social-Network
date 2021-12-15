import React, {useState} from 'react';
import classes from '../profile.module.scss'
import bg from "../../../assets/img/bg.jpg";
import Preloader from "../../common/preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/img/cat.png";
import ProfileDataReduxForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
    let [editMode, setEditMode] = useState(false);

    if(!profile) {
        return <Preloader />;
    }

    const onChangeAvatar= (e) => {
        if(e.target.files.length){
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
       saveProfile(formData).then(
           () => {
               setEditMode(false);
           }
       );
    }

    return (
        <div className={classes.profile__main}>
            <div className={classes.profile__header}>
                <img src={bg} alt="" />
            </div>
            <div className={classes.profile__info}>
                <div className={classes.profile__ava}>
                    <img src={profile.photos.large || userPhoto} alt="" />
                    {
                        isOwner && <input type={"file"} onChange={onChangeAvatar}/>
                    }
                </div>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                {editMode ?
                    <ProfileDataReduxForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                    : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => {setEditMode(true)}} />}
            </div>
        </div>
    );
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return (
        <div className={classes.profile__description}>
            {isOwner && <div><button onClick={goToEditMode}>Edit</button></div>}
            Description
            <div>{profile.fullName}</div>

            <div>Looking for a job: {profile.lookingForAJob ? "yse" : "no"}</div>
            <div>About me: {profile.aboutMe}</div>
            <div>My professional skills: {profile.lookingForAJobDescription}</div>
            <div>Contacts: {Object.keys(profile.contacts).map(key =>
                <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            )}</div>
        </div>
    );
}



const Contact = ({contactTitle, contactValue}) => {
    return (
        <div>
            {contactTitle}: {contactValue}
        </div>
    );
}

export default ProfileInfo;

