import React from 'react';
import classes from './profile.module.scss';
import MyPosts from './myPosts/MyPosts';
import ProfileInfo from "./profileInfo/ProfileInfo";


const Profile = (props) => {

    return (
        <div className={classes.profile}>
            <div className={classes.profile__container}>
                <ProfileInfo />
                <MyPosts posts={props.state.posts} addPost={props.addPost}
                         postText={props.state.newPostText}
                         updateNewPostText={props.updateNewPostText}/>
            </div>
        </div>
    );
}

export default Profile;