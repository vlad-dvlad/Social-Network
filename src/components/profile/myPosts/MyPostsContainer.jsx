import React from 'react';
import MyPosts from "./MyPosts";
import {addPost, updateNewPostText} from "../../../redux/reducers/profileReducer";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
        posts: state.profilePage.posts,
        postText: state.profilePage.newPostText,
    }
}



const MyPostsContainer = connect(mapStateToProps, {
    addPost,
    updateNewPostText,
})(MyPosts);

export default MyPostsContainer;