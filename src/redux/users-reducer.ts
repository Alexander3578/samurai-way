import {Dispatch} from 'redux';
import {AppActionType, AppDispatch, AppThunk} from './redux-store';
import {api} from '../api/api';

const followAD = 'FOLLOW'
const unfollowAD = 'UNFOLLOW'
const setUsersAD = 'SET-USERS'
const setCurrentPageAD = 'SET-CURRENT-PAGE'
const setTotalUsersCountAD = 'SET-TOTAL-USERS'
const togglePreloaderAD = 'TOGGLE-PRELOADER'
const toggleFollowingInProgressAD = 'TOGGLE-FOLLOWING-PROGRESS'

export type ActionUsersType =
    ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUsersCountAC>
    | ReturnType<typeof togglePreloaderAC>
    | ReturnType<typeof toggleFollowingInProgressAC>;

type PhotosType = {
    large: string
    small: string
}

export type UsersType = {
    id: number
    photos: PhotosType
    followed: boolean
    name: string
    status: string | null
    uniqueUrlName: string | null
}

type UsersStateType = {
    users: UsersType[]
    totalCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

const initialState: UsersStateType = {
    users: [],
    totalCount: 0,
    pageSize: 5,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

export const usersReducer = (state: UsersStateType = initialState, action: ActionUsersType) => {
    switch (action.type) {
        case followAD: {
            return {
                ...state,
                users: state.users.map((user) => user.id === action.payload.id ? !user.followed ? {
                    ...user,
                    followed: true
                } : user : user)
            }
        }
        case unfollowAD: {
            return {
                ...state,
                users: state.users.map((user) => user.id === action.payload.id ? user.followed ? {
                    ...user,
                    followed: false
                } : user : user)
            }
        }
        case setUsersAD: {
            return {
                ...state,
                users: action.payload.users
            }
        }
        case setCurrentPageAD: {
            return {
                ...state,
                currentPage: action.payload.currentPage
            }
        }
        case setTotalUsersCountAD: {
            return {
                ...state,
                totalCount: action.payload.totalUsersCount
            }
        }
        case togglePreloaderAD: {
            return {
                ...state,
                isFetching: action.payload.isFetching
            }
        }
        case toggleFollowingInProgressAD: {
            return {
                ...state,
                followingInProgress: action.payload.isFollowing ?
                    [...state.followingInProgress, action.payload.userId] :
                    state.followingInProgress.filter(uId => uId !== action.payload.userId)
            }
        }
        default: {
            return state;
        }
    }
}

export const followAC = (id: number) => {
    return {
        type: followAD,
        payload: {
            id
        }
    } as const
}
export const unfollowAC = (id: number) => {
    return {
        type: unfollowAD,
        payload: {
            id
        }
    } as const
}

export const setUsersAC = (users: UsersType[]) => {
    return {
        type: setUsersAD,
        payload: {
            users
        }
    } as const
}

export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: setCurrentPageAD,
        payload: {
            currentPage
        }
    } as const
}

export const setTotalUsersCountAC = (totalUsersCount: number) => {
    return {
        type: setTotalUsersCountAD,
        payload: {
            totalUsersCount
        }
    } as const
}

export const togglePreloaderAC = (isFetching: boolean) => {
    return {
        type: togglePreloaderAD,
        payload: {
            isFetching
        }
    } as const
}

export const toggleFollowingInProgressAC = (isFollowing: boolean, userId: number) => {
    return {
        type: toggleFollowingInProgressAD,
        payload: {
            isFollowing,
            userId
        }
    } as const
}

export const setUsersTC = (pageSize: number, currentPage: number): AppThunk =>
    (dispatch: Dispatch<AppActionType>) => {

        dispatch(setCurrentPageAC(currentPage))
        dispatch(togglePreloaderAC(true))

        api['usersApi'].getUsers(pageSize, currentPage)
            .then((objUsers) => {
                dispatch(setUsersAC(objUsers.items))
                dispatch(setTotalUsersCountAC(objUsers.totalCount))
                dispatch(togglePreloaderAC(false))
            })
    }

export const followTC = (userId: number, isAuth: boolean): AppThunk =>
    (dispatch: Dispatch<AppActionType>) => {
        if (isAuth) {
            dispatch(toggleFollowingInProgressAC(true, userId))
            api['usersApi'].follow(userId)
                .then((objOnFollow) => {
                    if (objOnFollow.resultCode === 0)
                        dispatch(followAC(userId))
                    dispatch(toggleFollowingInProgressAC(false, userId))
                })
        }
    }

export const unfollowTC = (userId: number, isAuth: boolean): AppThunk =>
    (dispatch: Dispatch<AppActionType>) => {
        if (isAuth) {
            dispatch(toggleFollowingInProgressAC(true, userId))
            api['usersApi'].unfollow(userId)
                .then((objOnFollow) => {
                    if (objOnFollow.resultCode === 0)
                        dispatch(unfollowAC(userId))
                    dispatch(toggleFollowingInProgressAC(false, userId))
                })
        }
    }