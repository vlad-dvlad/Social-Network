import React from 'react';
import classes from './footer.module.scss';

const Footer = () => {
    return (
        <footer className={`${classes.footer} ${classes.footer__container}`}>
            <div className={classes.footer__copyright}>
                <h2>© 2021 Copyright: Ivashko Vladyslav</h2>
            </div>
        </footer>
    );
}

export default Footer;