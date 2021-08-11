import React from 'react';
import classes from '../profile.module.scss'
import bg from "../../../assets/img/bg.jpg";


const ProfileInfo = () => {
    return (
        <div className={classes.profile__main}>
            <div className={classes.profile__header}>
                <img src={bg} alt="" />
            </div>
            <div className={classes.profile__info}>
                <div className={classes.profile__ava}>
                    Ava
                </div>
                <div className={classes.profile__description}>
                    Description
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;
