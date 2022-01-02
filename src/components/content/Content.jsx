import React from 'react';
import styles from './content.module.scss'
import {Redirect, Route} from "react-router-dom";
import {WithSuspense} from "../../hoc/WithSuspense";
import NavbarContainer from "../navbar/NavbarContainer";
import classNames from "classnames";

const DialogsContainer = React.lazy(() => import('../dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('../profile/ProfileContainer'));
const UsersContainer  = React.lazy( () => import('../users/UsersContainer'));
const Login = React.lazy(() => import('../login/Login'));
const News = React.lazy(() => import('../news/News'));
const Settings = React.lazy( () => import('../settings/Settings'));
const Music = React.lazy( () => import ('../music/Music'));



const Content = () => {
    return (
        <main className={classNames(styles.main, "container-fluid", "p-0")}>
            <div className={classNames(styles.main__container, "row", "m-0")}>
                <div className={classNames(styles.main__nav, "col-lg-2", "p-0")}>
                    <NavbarContainer />
                </div>
                <div className={classNames(styles.main__content, "col-lg-10", "col-12", "p-0")}>
                    <Route path="/profile/:userId?" render={WithSuspense(ProfileContainer)}/>
                    <Route path="/dialogs" render={WithSuspense(DialogsContainer)}/>
                    <Route path="/news" render={WithSuspense(News)}/>
                    <Route path="/music" render={WithSuspense(Music)}/>
                    <Route path="/users" render={WithSuspense(UsersContainer)}/>
                    <Route path="/login" render={WithSuspense(Login)}/>
                    <Route path="/settings" render={WithSuspense(Settings)}/>
                </div>

            </div>
        </main>
    );
}

export default Content;