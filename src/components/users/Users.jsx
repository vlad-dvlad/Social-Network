import React from "react";
import classes from "./users.module.scss";
import Paginator from "../common/paginator/Paginator";
import User from "./User";

const Users = ({currentPage, onPageChanged, pageSize, totalUsersCount,  ...props}) => {

    return (
        <div className={`${classes.users} ${classes.users__container}`}>
            {
                props.users
                    .map(u => <User user={u} followUsers={props.followUsers} unFollowUsers={props.unFollowUsers}
                                    followingInProgress={props.followingInProgress} key={u.id}/>)
            }
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                       pageSize={pageSize} totalUsersCount={totalUsersCount}/>
        </div>
    );
}

export default Users;