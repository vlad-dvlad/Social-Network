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
        debugger
        props.dispatch({
            type: 'ADD-POST'
        });
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;

        props.dispatch({
            type: 'UPDATE-NEW-POST-TEXT',
            newText: text
        });
    }


    return(
        <div className={`${classes.posts} ${classes.posts__container}`}>
            <textarea onChange={onPostChange} className={classes.posts__text}
                      ref={newPostElement} value={props.postText}/>
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