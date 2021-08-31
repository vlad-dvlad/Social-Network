import React from 'react';
import classes from "./users.module.scss";
import userPhoto from "../../assets/img/cat.png";
import axios from "axios";

class Users extends React.Component {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return (
            <div className={`${classes.users} ${classes.users__container}`}>
                {
                    this.props.users
                        .map(u => <div key={u.id} className={`${classes.user} ${classes.user__container}`}>
                            <div className={classes.user__main}>
                                <div className={classes.user__avatar}>
                                    <img src={u.photos.small != null ? u.photos.small : userPhoto} alt=""/>
                                </div>
                                <div>
                                    {
                                        u.followed
                                            ? <button onClick={() => { this.props.unFollow(u.id) } } className={classes.user__btn}>Unfollow</button>
                                            : <button onClick={() => { this.props.follow(u.id) } } className={classes.user__btn}>Follow</button>
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
}

export default Users;