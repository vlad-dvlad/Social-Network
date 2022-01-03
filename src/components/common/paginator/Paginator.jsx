import React from "react";
import styles from "../../users/users.module.scss";
import classNames from "classnames";
import {createPages} from "../../../utils/createPages";

const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged}) => {
    let pageCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    createPages(pages, pageCount, currentPage);

    return (
        <div className={classNames(styles.page, styles.page__container)}>
            {
                pages.map((page, index) => {
                    return <span className={ classNames({[styles.page__selected]: currentPage === page})}
                                 onClick={() => {
                              onPageChanged(page)
                          }} key={index}><span className={classNames(styles.page__item, {[styles.page__itemsel]: currentPage === page})}>{page}</span></span>;
                })
            }
        </div>
    );
}

export default Paginator;