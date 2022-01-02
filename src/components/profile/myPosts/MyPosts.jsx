import React from 'react';
import styles from './myPosts.module.scss';
import Post from './Posts/Post';
import {reduxForm} from "redux-form";
import {createField, Textarea} from "../../common/controlForms/ControlForms";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

const maxLength50 = maxLengthCreator(50);

const MyPosts = React.memo(({posts, imgUrl, addPostClear}) => {

    const onAddPost = (formData) => {
        addPostClear(formData.newPost);
    }

    return (
        <div className={`${styles.posts} ${styles.posts__container}`}>
            <MyPostsReduxForm onSubmit={onAddPost}/>
            <div className={styles.posts__title}>My post</div>
            <CreatePost posts={posts} imgUrl={imgUrl}/>
        </div>
    );
});

const CreatePost = ({posts, imgUrl}) => {

    return (
        <div className={styles.posts__items}>
            {
                posts.map((p, i)  => <div  key={i}  className={styles.posts__item}>
                    <Post photos={imgUrl} message={p.message} likeCount={p.likesCount} />
                </div>)
            }
        </div>
    );
}

const MyPostsForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit} className={styles.posts__form}>
            {createField("Enter something", "newPost", [maxLength50],
                Textarea, {}, "text", [styles.posts__text])}
            <button className={styles.posts__btn}>Add post</button>
        </form>
    );
}

const MyPostsReduxForm = reduxForm( {form: "sendPost"} )(MyPostsForm);

export default MyPosts;