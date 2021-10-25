import React from 'react';
import classes from './profile.module.scss';
import ProfileInfo from "./profileInfo/ProfileInfo";
import MyPostsContainer from "./myPosts/MyPostsContainer";



const Profile = ({profile, status, updateStatus}) => {

    return (
        <div className={classes.profile}>
            <div className={classes.profile__container}>
                <ProfileInfo profile={profile} updateStatus={updateStatus} status={status}/>
                <MyPostsContainer />
            </div>
        </div>
    );
}

export default Profile;