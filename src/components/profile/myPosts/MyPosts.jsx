import React from 'react';
import styles from './myPosts.module.scss';
import Post from './Posts/Post';
import {reduxForm} from "redux-form";
import {createField, Textarea} from "../../common/controlForms/ControlForms";
import {maxLengthCreator, required} from "../../../utils/validators/validators";


const maxLength50 = maxLengthCreator(50);

const MyPosts = React.memo(({posts, profile, addPostClear}) => {

    if(!profile) {
        return <></>;
    }

    let postsElement = posts.map(p => {
        return (
            <div className={styles.posts__item}>
                <Post profile={profile} message={p.message} likeCount={p.likesCount} key={p.id}/>
            </div>
        );
    });

    const onAddPost = (formData) => {
        addPostClear(formData.newPost);
    }

    return (
        <div className={`${styles.posts} ${styles.posts__container}`}>
            <MyPostsReduxForm onSubmit={onAddPost}/>
            <div className={styles.posts__title}>My post</div>
            <div className={styles.posts__items}>
                {
                    posts.map(p => <div className={styles.posts__item}>
                        <Post photos={profile.photos} message={p.message} likeCount={p.likesCount} key={p.id}/>
                    </div>)
                }
            </div>
        </div>
    );
});

const MyPostsForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit} className={styles.posts__form}>
            {createField("Enter something", "newPost", [required, maxLength50],
                Textarea, {}, "text", [styles.posts__text])}
            <button className={styles.posts__btn}>Add post</button>
        </form>
    );
}

const MyPostsReduxForm = reduxForm( {form: "sendPost"} )(MyPostsForm);

export default MyPosts;