import React from 'react';
import MyPosts from "./MyPosts";
import {addPost, addPostClear} from "../../../redux/reducers/profileReducer";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        photo: state.profilePage.profile.photos,
    }
}

const MyPostsContainer = connect(mapStateToProps, {
    addPostClear
})(MyPosts);

export default MyPostsContainer;