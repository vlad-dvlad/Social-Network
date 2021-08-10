import React from 'react';
import classes from './profile.module.scss';
import MyPosts from './myPosts/MyPosts';
import bg from './../../assets/img/bg.jpg';
import ProfileInfo from "./profileInfo/ProfileInfo";


const Profile = (props) => {

    return (
        <div className={classes.profile}>
            <div className={classes.profile__container}>
                <ProfileInfo />
                <MyPosts posts={props.state.posts}/>
            </div>
        </div>
    );
}

export default Profile;