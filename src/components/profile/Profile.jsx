import React from 'react';
import classes from './profile.module.scss';
import ProfileInfo from "./profileInfo/ProfileInfo";
import MyPostsContainer from "./myPosts/MyPostsContainer";

const Profile = ({profile, status, isOwner, updateStatus, savePhoto, saveProfile}) => {

    return (
        <div className={classes.profile}>
            <div className={classes.profile__container}>
                <ProfileInfo profile={profile} status={status} isOwner={isOwner}
                             updateStatus={updateStatus} savePhoto={savePhoto} saveProfile={saveProfile}/>
                {
                    isOwner && <MyPostsContainer />
                }
            </div>
        </div>
    );
}

export default Profile;