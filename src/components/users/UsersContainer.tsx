import React from 'react';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC, togglePreloaderAC,
    unfollowAC,
    UsersType
} from '../../redux/users-reducer';
import {Users} from './Users';
import {Preloader} from '../comman/Preloader';
import { api } from '../../api/api';

class UsersAPIComponent extends React.Component<UsersPropsType, UsersPropsType> {

    componentDidMount() {
        this.props.togglePreloader(true)
       api['usersApi'].getUsers(this.props.pageSize, this.props.currentPage)
            .then((objUsers) => {
                this.props.setUsers(objUsers.items)
                this.props.setTotalUsersCount(objUsers.totalCount)
                this.props.togglePreloader(false)
            })
    }

    onChangeCurrentPageHandler = (pageNum: number) => {
        this.props.setCurrentPage(pageNum)
        this.props.togglePreloader(true)
        api['usersApi'].getUsers(this.props.pageSize, pageNum)
            .then((objUsers) => {
                this.props.setUsers(objUsers.items)
                this.props.togglePreloader(false)
            })
    }

    render() {
        return <>
            {this.props.isFetching
                ? <Preloader/>
                : <Users totalCount={this.props.totalCount}
                         onChangeCurrentPage={this.onChangeCurrentPageHandler}
                         pageSize={this.props.pageSize}
                         currentPage={this.props.currentPage}
                         follow={this.props.follow}
                         unfollow={this.props.unfollow}
                         users={this.props.users}
                         isAuth={this.props.isAuth}
                />
            }
        </>

    }
}

type MapStateToPropsType = {
    users: UsersType[]
    totalCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    isAuth: boolean
}

type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    togglePreloader: (isFetching: boolean) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType;

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isAuth: state.auth.isAuth
    }
}

// let mapDispatchToProps = (dispatch: (action: ActionType) => void): MapDispatchToPropsType => {
//     return {
//         follow: (userId: number) => dispatch(followAC(userId)),
//         unfollow: (userId: number) => dispatch(unfollowAC(userId)),
//         setUsers: (users: UsersType[]) => dispatch(setUsersAC(users)),
//         setCurrentPage: (currentPage: number) => dispatch(setCurrentPageAC(currentPage)),
//         setTotalUsersCount: (totalUsersCount: number) => dispatch(setTotalUsersCountAC(totalUsersCount)),
//         togglePreloader: (isFetching: boolean) => dispatch(togglePreloaderAC(isFetching))
//     }
// }

export const UsersContainer = connect(mapStateToProps, {follow: followAC,
    unfollow: unfollowAC,
    setUsers: setUsersAC,
    setCurrentPage:setCurrentPageAC,
    setTotalUsersCount: setTotalUsersCountAC,
    togglePreloader: togglePreloaderAC})(UsersAPIComponent);

