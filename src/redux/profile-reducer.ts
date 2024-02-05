import {v1} from 'uuid';
import {PostPropsType} from '../components/profile/myPosts/post/Post';
import {Dispatch} from 'redux';
import {AppActionType} from './redux-store';
import {api} from '../api/api';

const addPostAT = 'ADD-POST';
const setUserProfileAT = 'SET-USER-PROFILE';
const setStatusProfileAT = 'SET-STATUS-PROFILE';

export type ProfileUserType = {
    aboutMe: string;
    contacts: ProfileUserTypeContacts;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    fullName: string;
    userId: number;
    photos: ProfileUserTypePhotos;
}
export type ProfileUserTypeContacts = {
    facebook: string | null;
    website: string | null;
    vk: string | null;
    twitter: string | null;
    instagram: string | null;
    youtube: string | null;
    github: string;
    mainLink: string | null;
}
export type ProfileUserTypePhotos = {
    small: string;
    large: string;
}

export type ProfileType = {
    postData: Array<PostPropsType>
    profile: null | ProfileUserType
    status: string
}

export type ActionProfileType =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof setUserProfileAC>
    | ReturnType<typeof setStatusProfileAC>;

const initialState: ProfileType = {
    'postData': [
        {id: v1(), postName: 'OOOOO', likesCount: 5},
        {id: v1(), postName: 'PPPPP', likesCount: 333},
        {id: v1(), postName: 'EEEEE', likesCount: 22},
        {id: v1(), postName: 'ХХХХХ', likesCount: 3}
    ],
    'profile': null,
    'status': ''
}

export const profileReducer = (state: ProfileType = initialState, action: ActionProfileType): ProfileType => {
    switch (action.type) {
        case addPostAT: {
            return {
                ...state, postData: [{
                    id: action.payload.id,
                    postName: action.payload.newPostBody,
                    likesCount: 0
                }, ...state['postData']]
            }
        }
        case setUserProfileAT: {
            return {...state, profile: action.payload.profile}
        }
        case setStatusProfileAT: {
            return {...state, status: action.payload.status}
        }
        default:
            return state
    }

}

export const addPostAC = (newPostBody: string) => ({
    type: addPostAT,
    payload: {
        id: v1(),
        newPostBody
    }
} as const)

export const setUserProfileAC = (profile: ProfileUserType) => {
    return {
        type: setUserProfileAT,
        payload: {
            profile,
        }
    } as const
}

export const setStatusProfileAC = (status: string) => {
    return {
        type: setStatusProfileAT,
        payload: {
            status,
        }
    } as const
}

//THUNKS

export const getProfileUserTC = (userId: number) =>
    (dispatch: Dispatch<AppActionType>) => {
        api['profileApi'].getProfileUser(userId)
            .then(data => {
                dispatch(setUserProfileAC(data))
            })
    }

export const getProfileStatusTC = (userId: number) =>
    (dispatch: Dispatch<AppActionType>) => {
        api['profileApi'].getProfileStatus(userId)
            .then(data => {
                console.log(data)
                dispatch(setStatusProfileAC(data))
            })
    }

    export const updateProfileStatusTC = (status: string) =>
    (dispatch: Dispatch<AppActionType>) => {
        api['profileApi'].updateProfileStatus(status)
            .then(data => {
                if(data.resultCode === 0)
                dispatch(setStatusProfileAC(status))
            })
    }