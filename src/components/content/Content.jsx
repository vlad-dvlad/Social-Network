import React from 'react';
import Navbar from '../navbar/Navbar';
import classes from './content.module.scss'
import {Route} from "react-router-dom";
import {WithSuspense} from "../../hoc/WithSuspense";

const DialogsContainer = React.lazy(() => import('../dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('../profile/ProfileContainer'));
const UsersContainer  = React.lazy( () => import('../users/UsersContainer'));
const Login = React.lazy(() => import('../login/Login'));
const News = React.lazy(() => import('../news/News'));
const Settings = React.lazy( () => import('../settings/Settings'));
const Music = React.lazy( () => import ('../music/Music'));



const Content = (props) => {
    return (
        <main className={`${classes.main} ${classes.main__container}`}>
            <Navbar/>
            <Route path="/profile/:userId?" render={ WithSuspense(ProfileContainer) } />
            <Route path="/dialogs" render={ WithSuspense(DialogsContainer)}/>
            <Route path="/news" render={WithSuspense(News)} />
            <Route path="/music" render={WithSuspense(Music)} />
            <Route path="/users" render={WithSuspense(UsersContainer)}/>
            <Route path="/login" render={WithSuspense(Login)} />
            <Route path="/settings" render={WithSuspense(Settings)} />
        </main>
    );
}

export default Content;