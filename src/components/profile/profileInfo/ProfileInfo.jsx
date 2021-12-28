import React, {useState} from 'react';
import styles from '../profile.module.scss'
import Preloader from "../../common/preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/img/cat.png";
import ProfileDataReduxForm from "./ProfileDataForm";
import classNames from "classnames";

const ProfileInfo = ({profile, status, isOwner, updateStatus, savePhoto, saveProfile}) => {
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
        <div className={styles.profile__main}>
            <div className={styles.profile__info}>
                <div className={styles.profile__ava}>
                    <img src={profile.photos.large || userPhoto} alt="" />
                    {
                        isOwner &&
                        <label className={styles.profile__load}>
                            <input type={"file"} onChange={onChangeAvatar} />Change Photo
                        </label>
                    }
                </div>
                <div className={classNames(styles.profile__data, styles.data)}>
                    <span className={styles.data__name}>{profile.fullName}</span>
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                    {editMode ?
                        <ProfileDataReduxForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                        : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => {setEditMode(true)}} />}
                </div>
            </div>
        </div>
    );
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return (
        <div className={styles.profile__description}>
            <div className={styles.data__text}>Looking for a job: <span>{profile.lookingForAJob ? "yes" : "no"}</span></div>
            <div className={styles.data__text}>About me: <span>{profile.aboutMe}</span></div>
            <div className={styles.data__text}>My professional skills: <span>{profile.lookingForAJobDescription}</span></div>
            <div className={styles.data__contacts}>Contacts: {Object.keys(profile.contacts).map(key =>
                <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            )}</div>
            {isOwner && <div ><button className={styles.data__edit} onClick={goToEditMode}>Edit</button></div>}
        </div>
    );
}



const Contact = ({contactTitle, contactValue}) => {
    return (
        <div className={styles.contacts}>
            <span className={styles.contacts__title}>{contactTitle}</span>:
            <span className={styles.contacts__value}>{contactValue}</span>
        </div>
    );
}

export default ProfileInfo;

