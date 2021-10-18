import React from 'react';
import classes from './myPosts.module.scss';
import Post from './Posts/Post';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/controlForms/ControlForms";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

const maxLength20 = maxLengthCreator(20);

const MyPosts = React.memo(props => {

    console.log("Render");


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

    return (
        <div className={`${classes.posts} ${classes.posts__container}`}>
            <MyPostsReduxForm onSubmit={onAddPost}/>
            <div>My post</div>
            <div className={classes.posts__items}>
                {postsElement}
            </div>
        </div>
    );
});

const MyPostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field className={classes.posts__text} type={"text"} name={"newPost"}
                   component={Textarea} validate={[required, maxLength20]}/>
            <button>Add post</button>
        </form>
    );
}

const MyPostsReduxForm = reduxForm( {form: "sendPost"} )(MyPostsForm);

export default MyPosts;