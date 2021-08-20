import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/state";


let renderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App appState={state}
                 addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)} // profile
                 sendMessage={store.sendMessage.bind(store)} inputMessage={store.inputMessageText.bind(store)} // dialogs
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderEntireTree(store.getState());

store.subscribe(renderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
