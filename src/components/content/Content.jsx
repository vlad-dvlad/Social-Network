import React from 'react';
import Dialogs from '../dialogs/Dialogs';
import Navbar from '../navbar/Navbar';
import Profile from '../profile/Profile';
import classes from './content.module.scss'
import {BrowserRouter, Route} from "react-router-dom";
import News from "../news/News";
import Music from "../music/Music";
import Settings from "../settings/Settings";

const Content = () => {
    return (
        <main className={`${classes.main} ${classes.main__container}`}>
            <Navbar/>
            <Route path="/profile" component={Profile}/>
            <Route path="/dialogs" component={Dialogs}/>
            <Route path="/news" component={News} />
            <Route path="/music" component={Music} />
            <Route path="/settings" component={Settings} />
        </main>
    );
}

export default Content;