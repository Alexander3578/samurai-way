import {ActionType} from './index';

const followAD = 'FOLLOW'
const unfollowAD = 'UNFOLLOW'
const setUsersAD = 'SET-USERS'
const setCurrentPageAD = 'SET-CURRENT-PAGE'
const setTotalUsersCountAD = 'SET-TOTAL-USERS'

export type ActionUsersType = ReturnType<typeof followAC> | ReturnType<typeof unfollowAC> |  ReturnType<typeof setUsersAC> | ReturnType<typeof setCurrentPageAC> | ReturnType<typeof setTotalUsersCountAC>;

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

type InitialStateType = {
    users: UsersType[]
    totalCount: number
    pageSize: number
    currentPage: number
}

const initialState:InitialStateType = {
    users: [],
    totalCount: 0,
    pageSize: 5,
    currentPage: 1
}

export const usersReducer = (state: InitialStateType = initialState, action: ActionType) => {
    switch (action.type){
        case followAD: {
            return {...state,
                users: state.users.map((user) => user.id === action.payload.id ? !user.followed ? {...user, followed: true} : user : user)}
        }
        case unfollowAD: {
            return {...state,
                users: state.users.map((user) => user.id === action.payload.id ? user.followed ? {...user, followed: false} : user : user)}
        }
        case setUsersAD: {
            return {...state,
                users: action.payload.users }
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
        type:setCurrentPageAD,
        payload: {
            currentPage
        }
    } as const
}

export const setTotalUsersCountAC = (totalUsersCount: number) => {
    return {
        type:setTotalUsersCountAD,
        payload: {
            totalUsersCount
        }
    } as const
}
