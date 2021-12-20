import React from 'react';
import Navbar from '../navbar/Navbar';
import classes from './content.module.scss'
import {Redirect, Route} from "react-router-dom";
import {WithSuspense} from "../../hoc/WithSuspense";
import NavbarContainer from "../navbar/NavbarContainer";

const DialogsContainer = React.lazy(() => import('../dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('../profile/ProfileContainer'));
const UsersContainer  = React.lazy( () => import('../users/UsersContainer'));
const Login = React.lazy(() => import('../login/Login'));
const News = React.lazy(() => import('../news/News'));
const Settings = React.lazy( () => import('../settings/Settings'));
const Music = React.lazy( () => import ('../music/Music'));



const Content = () => {
    return (
        <main className={`${classes.main} ${classes.main__container}`}>
            <NavbarContainer/>
            <Route path="/" render={() => <Redirect to={"/profile"}/> }/>
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