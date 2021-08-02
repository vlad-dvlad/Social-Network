import React from 'react';
import Dialogs from '../dialogs/Dialogs';
import Navbar from '../navbar/Navbar';
import Profile from '../profile/Profile';
import classes from './content.module.scss'

const Content = () => {
    return (
        <main className={`${classes.main} ${classes.main__container}`}>
            <Navbar />
            {/* <Profile /> */}
            <Dialogs />
        </main>
        
    );
}

export default Content;