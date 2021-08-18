let renderEntireTree = () => {
    console.log('');
}


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


export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    renderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    renderEntireTree(state);
}

export const sendMessage = () => {
    let newMessage = {
        id: 4,
        message: state.dialogsPage.newMessageText
    };

    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    renderEntireTree(state);
}

export const inputMessageText = (newMessage) => {
    state.dialogsPage.newMessageText = newMessage;
    renderEntireTree(state);
}

export const subscribe = (observer) => {
    renderEntireTree = observer;
}

export default state;
