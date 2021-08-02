import React from 'react';
import classes from './profile.module.scss';
import MyPosts from './myPosts/MyPosts';
import bg from './../../assets/img/bg.jpg';


const Profile = () => {
    return (
        <div className={`${classes.profile} ${classes.profile__container}`}>
            <div className="profile__header">
                <img src={bg} alt="" />
            </div>
            <div className="profile__info">
                <div className="profile__ava">
                    Ava
                </div>
                <div className="profile__description">
                    Description
                </div>
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;