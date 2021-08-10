import React from 'react';
import classes from './myPosts.module.scss';
import Post from './Posts/Post';

const MyPosts = (props) => {

    let postsElement = props.posts.map(p => {
        return (
            <div className={classes.posts__item}>
                <Post message={p.message} likeCount={p.likesCount}/>
            </div>
        );
    });

    return(
        <div className={`${classes.posts} ${classes.posts__container}`}>
            <textarea className={classes.posts__text}></textarea>
            <button>Add post</button>
             <div>My post</div>
             <div className={classes.posts__items}>
                 {postsElement}
             </div>
            <div>New post</div>
        </div>
    );
}

export default MyPosts;