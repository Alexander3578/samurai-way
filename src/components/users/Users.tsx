import React from 'react';
import s from './Users.module.css';
import {UsersType} from '../../redux/users-reducer';
import avatar from '../../assets/images/23ba420de78f87c008bf699e6eaddc9b.jpg';
import {NavLink} from 'react-router-dom';

type UsersPropsType = {
    totalCount: number
    onChangeCurrentPage: (pageNum: number) => void
    pageSize: number
    currentPage: number
    follow: (userId: number, isAuth: boolean) => void
    unfollow: (userId: number, isAuth: boolean) => void
    users: UsersType[]
    isAuth: boolean
    followingInProgress: number[]
}

export const Users: React.FC<UsersPropsType> = ({
                                                    totalCount,
                                                    currentPage,
                                                    onChangeCurrentPage,
                                                    pageSize,
                                                    unfollow,
                                                    follow,
                                                    users,
                                                    isAuth,
                                                    followingInProgress
                                                }: UsersPropsType) => {

    let pagesCount = Math.ceil(totalCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const onFollowHandler = (userId: number) => {
        follow(userId, isAuth)
    }

    const onUnfollowHandler = (userId: number) => {
        unfollow(userId, isAuth)
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
                            <NavLink to={`/profile/${u.id}`}>
                                <img src={u.photos.small !== null ? u.photos.small : avatar}
                                     style={{width: '40px', height: '40px', borderRadius: '50%'}}
                                     alt="users avatar"/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed ?
                                <button onClick={() => onUnfollowHandler(u.id)}
                                        disabled={followingInProgress.some(id => id === u.id)}>
                                    Unfollow
                                </button> :
                                <button onClick={() => onFollowHandler(u.id)}
                                        disabled={followingInProgress.some(id => id === u.id)}>
                                    Follow
                                </button>
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

