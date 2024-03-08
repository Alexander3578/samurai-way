import {Dispatch} from 'redux';
import {AppActionType, AppThunk} from './redux-store';
import {api, ResponseType} from 'api/api';
import {updateObjInArray} from 'utils/helper/objects-helpers';

const followAD = 'samurai-network/users/FOLLOW'
const unfollowAD = 'samurai-network/users/UNFOLLOW'
const setUsersAD = 'samurai-network/users/SET-USERS'
const setCurrentPageAD = 'samurai-network/users/SET-CURRENT-PAGE'
const setTotalUsersCountAD = 'samurai-network/users/SET-TOTAL-USERS'
const togglePreloaderAD = 'samurai-network/users/TOGGLE-PRELOADER'
const toggleFollowingInProgressAD = 'samurai-network/users/TOGGLE-FOLLOWING-PROGRESS'

export type ActionUsersType =
    ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUsersCountAC>
    | ReturnType<typeof togglePreloaderAC>
    | ReturnType<typeof toggleFollowingInProgressAC>;

export type PhotosType = {
    large: string | null
    small: string | null
}

export type UsersType = {
    id: number
    photos: PhotosType
    followed: boolean
    name: string
    status: string | null
    uniqueUrlName: string | null
}

export type UsersStateType = {
    users: UsersType[]
    totalCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

export enum ResultCode {
    Success = 0,
    Error = 1,
}

const initialState: UsersStateType = {
    users: [],
    totalCount: 0,
    pageSize: 5,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

export const usersReducer = (state: UsersStateType = initialState, action: ActionUsersType):UsersStateType => {
    switch (action.type) {
        case followAD: {
            return {
                ...state,
                users: updateObjInArray(state.users, action.payload.id, {followed: true})
                // users: state.users.map((user) => user.id === action.payload.id ? {
                //     ...user,
                //     followed: !user.followed && true
                // } : user)
            }
        }
        case unfollowAD: {
            return {
                ...state,
                users: updateObjInArray(state.users, action.payload.id, {followed: false})
                // users: state.users.map((user) => user.id === action.payload.id ? {
                //     ...user,
                //     followed: user.followed && false
                // } : user)
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

//THUNKS

export const setUsersTC = (pageSize: number, currentPage: number): AppThunk =>
    async (dispatch: Dispatch<AppActionType>) => {
        dispatch(setCurrentPageAC(currentPage))
        dispatch(togglePreloaderAC(true))

        const res = await api['usersApi'].getUsers(pageSize, currentPage)
        dispatch(setUsersAC(res.items))
        dispatch(setTotalUsersCountAC(res.totalCount))
        dispatch(togglePreloaderAC(false))
    }

const followUnfollowFlow = async (isAuth: boolean,
                                  dispatch: Dispatch<AppActionType>,
                                  userId: number,
                                  apiMethod: (userId: number) => Promise<ResponseType>,
                                  actionCreator: typeof followAC | typeof unfollowAC) => {
    if (isAuth) {
        dispatch(toggleFollowingInProgressAC(true, userId));
        const res = await apiMethod(userId);
        if (res.resultCode === ResultCode.Success)
            dispatch(actionCreator(userId))
        dispatch(toggleFollowingInProgressAC(false, userId))
    }
}

export const followTC = (userId: number, isAuth: boolean): AppThunk =>
    async (dispatch: Dispatch<AppActionType>) => {
        await followUnfollowFlow(isAuth, dispatch, userId, api['usersApi'].follow.bind(api.usersApi), followAC)
    }

export const unfollowTC = (userId: number, isAuth: boolean): AppThunk =>
    async (dispatch: Dispatch<AppActionType>) => {
        await followUnfollowFlow(isAuth, dispatch, userId, api['usersApi'].unfollow.bind(api.usersApi), unfollowAC)
    }