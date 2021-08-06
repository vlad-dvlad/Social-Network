import React from 'react';
import Dialogs from '../dialogs/Dialogs';
import Navbar from '../navbar/Navbar';
import Profile from '../profile/Profile';
import classes from './content.module.scss'
import {BrowserRouter, Route} from "react-router-dom";

const Content = () => {
    return (
        <main className={`${classes.main} ${classes.main__container}`}>
            <Navbar/>
            <Route path="/dialogs" component={Dialogs}/>
            <Route path="/profile" component={Profile}/>
        </main>
    );
}

export default Content;