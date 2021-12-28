import React from 'react';
import classes from './profile.module.scss';
import ProfileInfo from "./profileInfo/ProfileInfo";
import MyPostsContainer from "./myPosts/MyPostsContainer";

const Profile = ({profile, status, updateStatus, isOwner, posts, savePhoto, saveProfile, addPostClear}) => {

    console.log(profile);

    return (
        <div className={classes.profile}>
            <div className={classes.profile__container}>
                <ProfileInfo profile={profile}
                             updateStatus={updateStatus}
                             status={status} isOwner={isOwner}
                             savePhoto={savePhoto} saveProfile={saveProfile}/>
                {/*<MyPosts profile={profile} posts={posts} addPostClear={addPostClear} />*/}
                <MyPostsContainer />
            </div>
        </div>
    );
}

export default Profile;