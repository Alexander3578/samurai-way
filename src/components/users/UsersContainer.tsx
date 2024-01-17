import React from 'react';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {
    followTC,
    setUsersTC,
    unfollowTC,
    UsersType
} from '../../redux/users-reducer';
import {Users} from './Users';
import {Preloader} from '../comman/Preloader';

class UsersAPIComponent extends React.Component<UsersPropsType, UsersPropsType> {

    componentDidMount() {
        this.props.setUsers(this.props.pageSize, this.props.currentPage)
    }

    onChangeCurrentPageHandler = (pageNum: number) => {
        this.props.setUsers(this.props.pageSize, pageNum)
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
                         followingInProgress={this.props.followingInProgress}
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
    followingInProgress: number[]
}

type MapDispatchToPropsType = {
    follow: (userId: number, isAuth: boolean) => void
    unfollow: (userId: number, isAuth: boolean) => void
    setUsers: (pageSize: number, currentPage: number) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType;

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isAuth: state.auth.isAuth,
        followingInProgress: state.usersPage.followingInProgress
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

export const UsersContainer = connect(mapStateToProps, {
    follow: followTC,
    unfollow: unfollowTC,
    setUsers: setUsersTC,
})(UsersAPIComponent);

