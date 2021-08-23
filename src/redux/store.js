import profileReducer from "./reducers/profileReducer";
import dialogsReducer from "./reducers/dialogsReducer";
import navbarReducer from "./reducers/navbarReducer";

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
        },
        navbar: {}
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

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.navbar = navbarReducer(this._state.navbar, action);

        this._callSubscriber(this._state)
    }
}




export default store;
