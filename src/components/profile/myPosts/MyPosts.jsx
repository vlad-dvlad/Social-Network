import React from 'react';
import classes from './myPosts.module.scss';
import Post from './Posts/Post';
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {

    let postsElement = props.posts.map(p => {
        return (
            <div className={classes.posts__item}>
                <Post message={p.message} likeCount={p.likesCount} key={p.id}/>
            </div>
        );
    });


    const onAddPost = (formData) => {
        props.addPost(formData.newPost);
    }


    return(
        <div className={`${classes.posts} ${classes.posts__container}`}>
            <MyPostsReduxForm onSubmit={onAddPost}/>
            <div>My post</div>
            <div className={classes.posts__items}>
                {postsElement}
            </div>
        </div>
    );
}

const MyPostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field className={classes.posts__text} type={"text"} name={"newPost"}
                   component={"textarea"}/>
            <button>Add post</button>
        </form>
    );
}

const MyPostsReduxForm = reduxForm( {form: "sendPost"} )(MyPostsForm);

export default MyPosts;