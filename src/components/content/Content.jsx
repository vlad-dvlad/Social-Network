import React from 'react';
import Navbar from '../navbar/Navbar';
import Profile from '../profile/Profile';
import classes from './content.module.scss'

const Content = () => {
    return (
        <main className={`${classes.main} ${classes.main__container}`}>
            <Navbar />
            <Profile />
        </main>
        
    );
}

export default Content;