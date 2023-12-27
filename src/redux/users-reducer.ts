import {ActionType} from './index';

const followAD = 'FOLLOW'
const unfollowAD = 'UNFOLLOW'
const setUsersAD = 'SET-USERS'

export type ActionUsersType = ReturnType<typeof followAC> | ReturnType<typeof unfollowAC> |  ReturnType<typeof setUsersAC>;

type UsersAddressType = {
    city: string
    country: string
}

export type UsersType = {
    id: string
    photo: string
    followed: boolean
    fullName: string
    status: string
    address: UsersAddressType
}

type InitialStateType = {
    users: UsersType[]
}

const initialState:InitialStateType = {
    users: []
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
                users: [...state.users, ...action.payload.users] }
        }
        default: {
            return state;
        }
    }
}

export const followAC = (id: string) => {
    return {
        type: followAD,
        payload: {
            id
        }
    } as const
}
export const unfollowAC = (id: string) => {
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
