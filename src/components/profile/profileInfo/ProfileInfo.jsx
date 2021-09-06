import React from 'react';
import classes from '../profile.module.scss'
import bg from "../../../assets/img/bg.jpg";
import Preloader from "../../common/preloader/Preloader";


const ProfileInfo = (props) => {

    if(!props.profile) {
        return <Preloader />;
    }

    let contacts = props.profile.contacts;

    return (
        <div className={classes.profile__main}>
            <div className={classes.profile__header}>
                <img src={bg} alt="" />
            </div>
            <div className={classes.profile__info}>
                <div className={classes.profile__ava}>
                    <img src={props.profile.photos.large} alt=""/>
                </div>
                <div className={classes.profile__description}>
                    Description
                    <div>{props.profile.fullName}</div>
                    <div>{props.profile.aboutMe}</div>
                    <div>
                        {
                            Object.keys(contacts).map(k => <div>{k} : {contacts[k]}</div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;

