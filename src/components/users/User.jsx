import React from "react";
import styles from "./users.module.scss";
import userPhoto from "../../assets/img/cat.png";
import {NavLink} from "react-router-dom";
import classNames from "classnames";

const User = ({user, status, followingInProgress, followUsers, unFollowUsers}) => {

    const followUser = (id) => {
        followUsers(id);
    }

    const unfollowUser = (id) => {
        unFollowUsers(id);
    }

    return (
        <div key={user.id} className={classNames(styles.user, styles.user__container)}>
            <div className={styles.user__main}>
                <div className={styles.user__avatar}>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} alt=""/>
                    </NavLink>
                </div>
                <div>
                    {
                        user.followed
                            ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                unfollowUser(user.id)
                            }} className={styles.user__btn}>Unfollow</button>

                            : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                followUser(user.id)
                            }} className={styles.user__btn}>Follow</button>
                    }
                </div>
            </div>
            <div className={styles.user__info}>
                <div className={styles.user__name}>
                    {user.name }
                </div>
                <div className={styles.user__location}>
                    {"u.location.country"}, {"u.location.city"}
                </div>
                <div className={styles.user__status}>
                    {status || "------"}
                </div>
            </div>
        </div>);
}

export default User;