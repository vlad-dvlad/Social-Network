import React from 'react';
import classes from './users.module.scss'
import axios from "axios";
import userPhoto from '../../assets/img/cat.png'

const Users = (props) => {

    if(props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                props.setUsers(response.data.items);
            })
    }

    return (
        <div className={`${classes.users} ${classes.users__container}`}>
            {
                props.users
                    .map(u => <div key={u.id} className={`${classes.user} ${classes.user__container}`}>
                    <div className={classes.user__main}>
                        <div className={classes.user__avatar}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} alt=""/>
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
        </div>
    );
}

export default Users;