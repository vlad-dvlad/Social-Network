import React from 'react';
import classes from './myPosts.module.scss';

const MyPosts = () => {
    return(
        <div className={`${classes.posts} ${classes.posts__container}`}>
            Post 1
        </div>
    );
}

export default MyPosts;