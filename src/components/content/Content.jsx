import React from 'react';
import Navbar from '../navbar/Navbar';
import classes from './content.module.scss'
import {Route} from "react-router-dom";
import News from "../news/News";
import Music from "../music/Music";
import Settings from "../settings/Settings";
import DialogsContainer from "../dialogs/DialogsContainer";
import UsersContainer from "../users/UsersContainer";
import ProfileContainer from "../profile/ProfileContainer";
import Login from "../login/Login";


const Content = (props) => {
    return (
        <main className={`${classes.main} ${classes.main__container}`}>
            <Navbar/>
            <Route path="/profile/:userId?"
                   render={ () => <ProfileContainer /*store={props.store}*/
                   /> }/>

            <Route path="/dialogs"
                   render={ () => <DialogsContainer /*store={props.store}*/
                   />}/>

            <Route path="/news" component={News} />
            <Route path="/music" component={Music} />
            <Route path="/users" render={() => <UsersContainer/>}/>
            <Route path="/login" component={Login} />
            <Route path="/settings" component={Settings} />
        </main>
    );
}

export default Content;