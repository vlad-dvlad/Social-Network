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

    let newPostElement = React.createRef();

    const addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    }


    return(
        <div className={`${classes.posts} ${classes.posts__container}`}>
            <textarea className={classes.posts__text} ref={newPostElement}></textarea>
            <button onClick={addPost}>Add post</button>
             <div>My post</div>
             <div className={classes.posts__items}>
                 {postsElement}
             </div>
            <div>New post</div>
        </div>
    );
}

export default MyPosts;