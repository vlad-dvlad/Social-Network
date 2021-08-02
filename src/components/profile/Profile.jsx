import React from 'react';
import MyPosts from './MyPosts/Posts/MyPosts';
import classes from './profile.module.scss';
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
            <div>My post</div>
            <div>New post</div>
            <MyPosts />
            <div>post 2</div>
        </div>
    );
}

export default Profile;