import React from "react";
import styles from "./users.module.scss";
import Paginator from "../common/paginator/Paginator";
import User from "./User";
import classNames from "classnames";

const Users = ({currentPage, onPageChanged, pageSize, totalUsersCount,  ...props}) => {

    return (
        <div className={classNames(styles.users, styles.users__container)}>
            {
                props.users
                    .map(u => <User user={u} followUsers={props.followUsers} unFollowUsers={props.unFollowUsers}
                                    followingInProgress={props.followingInProgress} key={u.id}/>)
            }
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                       pageSize={pageSize} totalItemsCount={totalUsersCount}/>
        </div>
    );
}

export default Users;