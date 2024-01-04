import React from 'react';
import s from './Users.module.css';
import {UsersType} from '../../redux/users-reducer';
import avatar from '../../assets/images/23ba420de78f87c008bf699e6eaddc9b.jpg';

type UsersPropsType = {
    totalCount: number
    onChangeCurrentPage: (pageNum: number) => void
    pageSize: number
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    users: UsersType[]
}

export const Users: React.FC<UsersPropsType> = ({
                                                    totalCount,
                                                    currentPage,
                                                    onChangeCurrentPage,
                                                    pageSize,
                                                    unfollow,
                                                    follow,
                                                    users
                                                }: UsersPropsType) => {

    let pagesCount = Math.ceil(totalCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }


    return (
        <div>
            <div>
                {
                    pages.map(pageNum => <span onClick={() => onChangeCurrentPage(pageNum)}
                                               className={currentPage === pageNum ? s.selectedPage : ''}>
                            {pageNum}
                        </span>)
                }
            </div>
            {
                users.map((u: UsersType) =>
                    <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small !== null ? u.photos.small : avatar}
                                 style={{width: '40px', height: '40px', borderRadius: '50%'}}
                                 alt="users avatar"/>
                        </div>
                        <div>
                            {u.followed ?
                                <button onClick={() => unfollow(u.id)}>Unfollow</button> :
                                <button onClick={() => follow(u.id)}>Follow</button>
                            }
                        </div>
                    </span>
                        <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                            {/*<span>*/}
                            {/*    <div>{u.address.city}</div>*/}
                            {/*    <div>{u.address.country}</div>*/}
                            {/*</span>*/}
                    </span>
                    </div>)
            }
        </div>
    );
};

