import React from 'react';
import classes from './profile.module.scss';
import ProfileInfo from "./profileInfo/ProfileInfo";
import MyPostsContainer from "./myPosts/MyPostsContainer";


const Profile = (props) => {

    return (
        <div className={classes.profile}>
            <div className={classes.profile__container}>
                <ProfileInfo />
                <MyPostsContainer
                /*                  profileState={props.state} dispatch={props.dispatch}*/
                />
            </div>
        </div>
    );
}

export default Profile;