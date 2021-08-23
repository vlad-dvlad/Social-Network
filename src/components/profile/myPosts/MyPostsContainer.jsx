import React from 'react';
import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/reducers/profileReducer";

const MyPostsContainer = (props) => {

    let state = props.store.getState();

    let addPost = () => {

    }

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }

    return(
        <MyPosts posts={state.profilePage.posts} postText={state.profilePage.newPostText}
                 addPost={addPost} updateNewPostText={onPostChange}/>
    );
}

export default MyPostsContainer;