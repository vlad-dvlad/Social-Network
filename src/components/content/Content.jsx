import React from 'react';
import Navbar from '../navbar/Navbar';
import Page from '../page/Page';
import './content.scss'

const Content = () => {
    return (
        <main className="main main__container">
            <Navbar />
            <Page />
        </main>
        
    );
}

export default Content;