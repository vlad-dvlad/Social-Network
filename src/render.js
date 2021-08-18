import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, inputMessageText, sendMessage, updateNewPostText} from "./redux/state";

export let renderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App appState={state}
                 addPost={addPost} updateNewPostText={updateNewPostText} // profile
                 sendMessage={sendMessage} inputMessage={inputMessageText} // dialogs
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
