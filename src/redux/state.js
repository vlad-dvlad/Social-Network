import {renderEntireTree} from "../render";


let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 13},
            {id: 2, message: 'It\'s my first post', likesCount: 15}
        ],
        newPostText: ''
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Viktor'},
            {id: 2, name: 'Dasha'},
            {id: 3, name: 'Andrew'},
            {id: 4, name: 'Roman'},
        ],
        messages: [
            {id: 1, message: 'This is message'},
            {id: 2, message: 'Yo'},
            {id: 3, message: 'Hi'}
        ],
        newMessageText: 'Hello, my friend!'
    }

};

window.state = state;

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    renderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    renderEntireTree(state);
}

export let sendMessage = () => {
    let newMessage = {
        id: 4,
        message: state.dialogsPage.newMessageText
    };

    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    renderEntireTree(state);
}

export let inputMessageText = (newMessage) => {
    state.dialogsPage.newMessageText = newMessage;
    renderEntireTree(state);
}

export default state;
