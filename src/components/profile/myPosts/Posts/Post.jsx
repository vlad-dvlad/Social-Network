import React from 'react';
import classes from './post.module.scss'

const Post = (props) => {

    return (
        <div className={`${classes.post} ${classes.post__container}`}>
            <div className={classes.post__body}>
                <div className={classes.post__image}>
                    <img src="https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop" alt="" />
                </div>
                <div className={classes.post__text}>
                    {props.message}
                </div>
            </div>
            <div className={classes.post__footer}>
                <div className={classes.post__like}>
                    <span>Like</span>
                </div>
            </div>
        </div>
    );
}

export default Post;