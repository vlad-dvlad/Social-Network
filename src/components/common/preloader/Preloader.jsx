import loader from "../../../assets/img/loader.gif";
import classes from './common.module.scss';
import React from "react";

const Preloader = (props) => {
    return(
        <div>
            <img src={loader} className={classes.users__loader}/>
        </div>
    )
}

export default Preloader;