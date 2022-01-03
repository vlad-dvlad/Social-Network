import loader from "../../../assets/img/loader.gif";
import styles from './common.module.scss';
import React from "react";

const Preloader = () => {
    return(
        <div>
            <img src={loader} className={styles.common__loader}/>
        </div>
    )
}

export default Preloader;