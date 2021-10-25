import React from "react";
import classes from "./users.module.scss";
import userPhoto from "../../assets/img/cat.png";
import {NavLink} from "react-router-dom";


const User = ({user, followingInProgress, followUsers, unFollowUsers}) => {

    const followUser = (id) => {
        followUsers(id);
    }

    const unfollowUser = (id) => {
        unFollowUsers(id);
    }

    return (
        <div key={user.id} className={`${classes.user} ${classes.user__container}`}>
            <div className={classes.user__main}>
                <div className={classes.user__avatar}>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} alt=""/>
                    </NavLink>
                </div>
                <div>
                    {
                        user.followed
                            ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                unfollowUser(user.id)
                            }}
                                      className={classes.user__btn}>Unfollow</button>

                            : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                followUser(user.id)
                            }}
                                      className={classes.user__btn}>Follow</button>
                    }
                </div>
            </div>
            <div className={classes.user__info}>
                <div className={classes.user__name}>
                    {user.name}
                </div>
                <div className={classes.user__location}>
                    {"u.location.country"}, {"u.location.city"}
                </div>
                <div className={classes.user__status}>
                    {user.status}
                </div>
            </div>
        </div>);
}

export default User;