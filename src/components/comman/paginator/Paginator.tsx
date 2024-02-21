import React, {useState} from 'react';
import s from 'components/comman/paginator/Paginator.module.css';


type UsersPropsType = {
    totalCount: number
    onChangeCurrentPage: (pageNum: number) => void
    pageSize: number
    currentPage: number
    portionSize: number
}

export const Paginator: React.FC<UsersPropsType> = ({
                                                        totalCount,
                                                        currentPage,
                                                        onChangeCurrentPage,
                                                        pageSize,
                                                        portionSize
                                                    }: UsersPropsType) => {

    let pagesCount = Math.ceil(totalCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(Math.ceil(currentPage / portionSize))
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return (
        <div>
            {portionNumber > 1 &&
                <button onClick={() => {
                    setPortionNumber(portionNumber - 1)
                }}>PREV</button>
            }
            {
                pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map(pageNum => <span key={pageNum}
                                          onClick={() => onChangeCurrentPage(pageNum)}
                                          className={currentPage === pageNum ? s.selectedPage : ''}>
                            {pageNum}
                        </span>)
            }
            {portionCount > portionNumber &&
                <button onClick={() => {
                    setPortionNumber(portionNumber + 1)
                }}>NEXT</button>
            }
        </div>
    )
};

