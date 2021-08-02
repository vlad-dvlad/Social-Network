import React from 'react';
import classes from './post.module.scss'

const Post = () => {
    return (
        <div>
                 
                 <div className={classes.post__image}>
                     <div>Post about something</div>
                     <img src="https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop" alt="" />
                    <div>
                        <span>like</span>
                    </div>
                 </div>
             </div>
    );
}

export default Post;