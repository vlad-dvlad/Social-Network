import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: 13},
    {id: 2, message: 'It\'s my first post', likesCount: 15}
];

let dialogs = [
    {id: 1, name: 'Viktor'},
    {id: 2, name: 'Dasha'},
    {id: 3, name: 'Andrew'},
    {id: 4, name: 'Roman'},
];

let messages = [
    {id: 1, message: 'This is message'},
    {id: 2, message: 'Yo'},
    {id: 3, message: 'Hi'}
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
