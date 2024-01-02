import React from 'react';
import {connect} from 'react-redux';
import {Users} from './Users';
import {AppStateType} from '../../redux/redux-store';
import {ActionType} from '../../redux';
import {followAC, setUsersAC, unfollowAC, UsersType} from '../../redux/users-reducer';

type MapStateToPropsType = {
    users: UsersType[]
}

type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UsersType[]) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType;

let mapStateToProps = (state: AppStateType):MapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch: (action: ActionType) => void):MapDispatchToPropsType => {
    return {
        follow: (userId: number) => dispatch(followAC(userId)),
        unfollow: (userId: number) => dispatch(unfollowAC(userId)),
        setUsers: (users: UsersType[]) => dispatch(setUsersAC(users))
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

