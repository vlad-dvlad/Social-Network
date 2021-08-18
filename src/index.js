import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {subscribe} from "./redux/state";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, inputMessageText, sendMessage, updateNewPostText} from "./redux/state";

let renderEntireTree = (state) => {
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

renderEntireTree(state);

subscribe(renderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
