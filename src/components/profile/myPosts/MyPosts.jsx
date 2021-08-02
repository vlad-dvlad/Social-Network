import React from 'react';
import classes from './myPosts.module.scss';
import Post from './Posts/Post';

const MyPosts = () => {
    return(
        <div className={`${classes.posts} ${classes.posts__container}`}>
             <div>My post</div>
             <Post />
             <Post />
             <Post />
             <Post />
             <Post />
            <div>New post</div>
            
        </div>
    );
}

export default MyPosts;