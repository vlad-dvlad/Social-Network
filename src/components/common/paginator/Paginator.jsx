import React from "react";
import classes from "../../users/users.module.scss";


const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
    let pageCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    return (
        <div className={`${classes.page} ${classes.page__container}`}>
            {pages.map(p => {
                return <span className={currentPage === p && classes.page__selected}
                             onClick={() => {
                                 onPageChanged(p)
                             }} key={p}>{p}</span>;
            })
            }
        </div>
    );
}

export default Paginator;