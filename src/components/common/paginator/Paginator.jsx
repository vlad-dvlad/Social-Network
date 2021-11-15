import React, {useState} from "react";
import classes from "../../users/users.module.scss";


const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
    let pageCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pageCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={`${classes.page} ${classes.page__container}`}>
            {
                portionCount > 1 &&
                    <button className={classes.page__btn} onClick={() => {setPortionNumber(portionNumber - 1)}}>PREV</button>
            }

            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                return <span className={
                    currentPage === p && classes.page__selected}
                             onClick={() => {
                                 onPageChanged(p)
                             }} key={p}>{p}</span>;
            })
            }
            {
               portionCount > portionNumber &&
               <button className={classes.page__btn}  onClick={() => {setPortionNumber(portionNumber + 1)} }>NEXT</button>
            }
        </div>
    );
}

export default Paginator;