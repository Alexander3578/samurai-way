import React from 'react';
import {UsersType} from 'redux/users-reducer';
import {Paginator} from 'components/comman/paginator/Paginator';
import {User} from 'components/users/User';

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
    return (
        <div>
            <Paginator totalCount={totalCount}
                       onChangeCurrentPage={onChangeCurrentPage}
                       pageSize={pageSize}
                       currentPage={currentPage}
                       portionSize={10}/>
            {
                users.map((u: UsersType) => <User key={u.id}
                                                  user={u}
                                                  followingInProgress={followingInProgress}
                                                  follow={follow}
                                                  unfollow={unfollow}
                                                  isAuth={isAuth}/>
                )
            }
        </div>
    );
};

