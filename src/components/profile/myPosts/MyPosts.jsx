import React from 'react';
import classes from './myPosts.module.scss';
import Post from './Posts/Post';

const MyPosts = () => {
    return(
        <div className={`${classes.posts} ${classes.posts__container}`}>
            <textarea className={classes.posts__text}></textarea>
            <button>Add post</button>
             <div>My post</div>
             <div className={classes.posts__items}>
                 <div className={classes.posts__item}>
                    <Post message='Hi, how are you?' likeCount='14'/>
                 </div>
                 <div className={classes.posts__item}>
                    <Post message="It's my first post" likeCount='10'/>
                 </div>
             </div>
             
             
            <div>New post</div>
            
        </div>
    );
}

export default MyPosts;