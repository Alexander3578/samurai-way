import React from 'react';
import {NavLink} from 'react-router-dom';
import avatar from 'assets/images/23ba420de78f87c008bf699e6eaddc9b.jpg';
import {UsersType} from 'redux/users-reducer';

type UserProps = {
    user: UsersType,
    followingInProgress: number[]
    follow: (userId: number, isAuth: boolean) => void
    unfollow: (userId: number, isAuth: boolean) => void
    isAuth: boolean
}

export const User: React.FC<UserProps> = ({user, followingInProgress, follow, unfollow, isAuth}) => {

    const onFollowHandler = (userId: number) => {
        follow(userId, isAuth)
    }

    const onUnfollowHandler = (userId: number) => {
        unfollow(userId, isAuth)
    }

    return (
        <div>
            <span>
                <div>
                    <NavLink to={`/profile/${user.id}`}>
                        <img src={user.photos.small !== null ? user.photos.small : avatar}
                             style={{width: '40px', height: '40px', borderRadius: '50%'}}
                             alt="users avatar"/>
                    </NavLink>
                </div>
                <div>
                    {user.followed ?
                        <button onClick={() => onUnfollowHandler(user.id)}
                                disabled={followingInProgress.some(id => id === user.id)}>
                            Unfollow
                        </button> :
                        <button onClick={() => onFollowHandler(user.id)}
                                disabled={followingInProgress.some(id => id === user.id)}>
                            Follow
                        </button>
                    }
                </div>
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                {/*<span>*/}
                {/*    <div>{u.address.city}</div>*/}
                {/*    <div>{u.address.country}</div>*/}
                {/*</span>*/}
            </span>
        </div>
    );
};

