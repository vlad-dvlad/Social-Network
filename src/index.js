import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/reduxStore";
import {BrowserRouter} from "react-router-dom";


let renderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App appState={state} dispatch={store.dispatch.bind(store)} appStore={store}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    renderEntireTree(state);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
