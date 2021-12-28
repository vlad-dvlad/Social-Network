import React from 'react';
import styles from './post.module.scss'
import userPhoto from "../../../../assets/img/cat.png";
const Post = ({photos, likeCount, message}) => {

    return (
        <div className={`${styles.post} ${styles.post__container}`}>
            <div className={styles.post__body}>
                <div className={styles.post__image}>
                    {/*<img src="https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop" alt="" />*/}
                    <img src={photos.large || userPhoto} alt="" />
                </div>
                <div className={styles.post__text}>
                    {message}
                </div>
            </div>
            <div className={styles.post__footer}>
                <div className={styles.post__like}>
                    <span>Like {likeCount}</span>
                </div>
            </div>
        </div>
    );
}

export default Post;