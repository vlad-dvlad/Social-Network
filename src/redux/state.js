const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 13},
                {id: 2, message: 'It\'s my first post', likesCount: 15}
            ],
            newPostText: 'It kamasutra'
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

    },
    _callSubscriber() {
        console.log('State changed!');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    // addPost() {
    //     let newPost = {
    //         id: 5,
    //         message: this._state.profilePage.newPostText,
    //         likesCount: 0
    //     };
    //
    //     this._state.profilePage.posts.push(newPost);
    //     this._state.profilePage.newPostText = '';
    //     this._callSubscriber(this.getState());
    // },
    // updateNewPostText(newText){
    //     this._state.profilePage.newPostText = newText;
    //     this._callSubscriber(this.getState());
    // },
    //
    // sendMessage() {
    //     let newMessage = {
    //         id: 4,
    //         message: this._state.dialogsPage.newMessageText
    //     };
    //
    //     this._state.dialogsPage.messages.push(newMessage);
    //     this._state.dialogsPage.newMessageText = '';
    //     this._callSubscriber(this.getState());
    // },
    // inputMessageText(newMessage) {
    //     this._state.dialogsPage.newMessageText = newMessage;
    //     this._callSubscriber(this.getState());
    // },

    dispatch(action) {
        if(action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this.getState());
        }
        else if(action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this.getState());
        }
        else if(action.type === 'SEND-MESSAGE') {
            let newMessage = {
                id: 4,
                message: this._state.dialogsPage.newMessageText
            };

            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this.getState());
        }
        else if(action.type === 'INPUT-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newMessage;
            this._callSubscriber(this.getState());
        }
    }
}


export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export const sendMessageActionCreator = () => ({ type: 'SEND-MESSAGE'})

export const inputMessageActionCreator = (message) =>
    ({ type: 'INPUT-MESSAGE-TEXT', newMessage: message })

export default store;
