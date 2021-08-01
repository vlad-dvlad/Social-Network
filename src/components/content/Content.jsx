import React from 'react';
import Navbar from '../navbar/Navbar';
import Page from '../page/Page';
import classes from './content.module.scss'

const Content = () => {
    return (
        <main className={`${classes.main} ${classes.main__container}`}>
            <Navbar />
            <Page />
        </main>
        
    );
}

export default Content;