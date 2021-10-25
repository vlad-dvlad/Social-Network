import React from 'react';
import classes from '../profile.module.scss'
import bg from "../../../assets/img/bg.jpg";
import Preloader from "../../common/preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {

    if(!profile) {
        return <Preloader />;
    }

    return (
        <div className={classes.profile__main}>
            <div className={classes.profile__header}>
                <img src={bg} alt="" />
            </div>
            <div className={classes.profile__info}>
                <div className={classes.profile__ava}>
                    <img src={!profile.photos.large} alt=""/>
                </div>
                <div className={classes.profile__description}>
                    Description
                    <div>{profile.fullName}</div>
                    <div>{profile.aboutMe}</div>
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;

