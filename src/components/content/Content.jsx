import React from 'react';
import Dialogs from '../dialogs/Dialogs';
import Navbar from '../navbar/Navbar';
import Profile from '../profile/Profile';
import classes from './content.module.scss'
import {Route} from "react-router-dom";
import News from "../news/News";
import Music from "../music/Music";
import Settings from "../settings/Settings";
import DialogsContainer from "../dialogs/DialogsContainer";


const Content = (props) => {
    return (
        <main className={`${classes.main} ${classes.main__container}`}>
            <Navbar/>
            <Route path="/profile"
                   render={ () => <Profile store={props.store}/> }/>

            <Route path="/dialogs"
                   render={ () => <DialogsContainer store={props.store}/>}/>

            <Route path="/news" component={News} />
            <Route path="/music" component={Music} />
            <Route path="/settings" component={Settings} />
        </main>
    );
}

export default Content;