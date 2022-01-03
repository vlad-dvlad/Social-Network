import React from 'react';
import {Link} from "react-router-dom";
import styles from "./notFound.module.scss";
import classNames from "classnames";

const NotFound = () => {
    return (
        <div className={classNames(styles.error, styles.error__container)}>
            <h2 className={styles.error__title}>404 - Not Found!</h2>
            <Link to={"/profile"} className={styles.error__link}>Go Home</Link>
        </div>
    );
};

export default NotFound;