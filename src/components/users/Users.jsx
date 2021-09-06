import React from "react";
import classes from "./users.module.scss";
import userPhoto from "../../assets/img/cat.png";
import {NavLink} from "react-router-dom";



const Users = (props) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }


    return (
        <div className={`${classes.users} ${classes.users__container}`}>
            {
                props.users
                    .map(u => <div key={u.id} className={`${classes.user} ${classes.user__container}`}>
                        <div className={classes.user__main}>
                            <div className={classes.user__avatar}>
                                <NavLink to={'/profile/' + u.id}>
                                    <img src={u.photos.small != null ? u.photos.small : userPhoto} alt=""/>
                                </NavLink>
                            </div>
                            <div>
                                {
                                    u.followed
                                        ? <button onClick={() => { props.unFollow(u.id) } } className={classes.user__btn}>Unfollow</button>
                                        : <button onClick={() => { props.follow(u.id) } } className={classes.user__btn}>Follow</button>
                                }
                            </div>
                        </div>
                        <div className={classes.user__info}>
                            <div className={classes.user__name}>
                                {u.name}
                            </div>
                            <div className={classes.user__location}>
                                {"u.location.country"}, {"u.location.city"}
                            </div>
                            <div className={classes.user__status}>
                                {u.status}
                            </div>
                        </div>
                    </div>)
            }
            <div className={`${classes.page} ${classes.page__container}`}>
                {pages.map(p => {
                    return <span className={props.currentPage === p && classes.page__selected}
                                 onClick={() => {props.onPageChanged(p)}}>{p}</span>;
                })
                }
            </div>
        </div>
    );
}

export default Users;