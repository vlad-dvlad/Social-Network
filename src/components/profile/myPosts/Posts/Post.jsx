import React from 'react';
import styles from './post.module.scss'
import userPhoto from "../../../../assets/img/cat.png";
const Post = ({photos, likeCount, message}) => {

    return (
        <div className={`${styles.post} ${styles.post__container}`}>
            <div className={styles.post__body}>
                <div className={styles.post__image}>
                    <img src={photos || userPhoto} alt="" />
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