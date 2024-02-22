import {v1} from 'uuid';
import {PostPropsType} from 'components/profile/myPosts/post/Post';
import {Dispatch} from 'redux';
import {AppActionType, AppDispatch, AppStateType} from './redux-store';
import {api} from 'api/api';
import {ProfileBlockFormData} from 'components/profile/profileInfotsx/profileBlockForm/profileBlockForm';
import {stopSubmit} from 'redux-form';

const addPostAT = 'ADD-POST';
const setUserProfileAT = 'samurai-network/profile/SET-USER-PROFILE';
const setStatusProfileAT = 'samurai-network/profile/SET-STATUS-PROFILE';
const deletePostProfileAT = 'samurai-network/profile/DELETE-POST-PROFILE';
const updatePhotoProfileAT = 'samurai-network/profile/UPDATE-PHOTO-PROFILE';

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
    | ReturnType<typeof setStatusProfileAC>
    | ReturnType<typeof deletePostProfileAC>
    | ReturnType<typeof updatePhotoProfileAC>;

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
        case deletePostProfileAT: {
            return {...state, postData: state['postData'].filter(post => post.id !== action.payload.postId)}
        }
        case updatePhotoProfileAT: {
            return {...state, profile: {...state.profile, ...action.payload.photos} as ProfileUserType}
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

export const deletePostProfileAC = (postId: string) => {
    return {
        type: deletePostProfileAT,
        payload: {
            postId,
        }
    } as const
}

export const updatePhotoProfileAC = (photos: ProfileUserTypePhotos) => {
    return {
        type: updatePhotoProfileAT,
        payload: {
            photos,
        }
    } as const
}

//THUNKS

export const getProfileUserTC = (userId: number) =>
    async (dispatch: Dispatch<AppActionType>) => {
        const data = await api['profileApi'].getProfileUser(userId)
        dispatch(setUserProfileAC(data))
    }

export const getProfileStatusTC = (userId: number) =>
    async (dispatch: Dispatch<AppActionType>) => {
        const data = await api['profileApi'].getProfileStatus(userId)
        dispatch(setStatusProfileAC(data))
    }

export const updateProfileStatusTC = (status: string) =>
    async (dispatch: Dispatch<AppActionType>) => {
        const data = await api['profileApi'].updateProfileStatus(status)
        if (data.resultCode === 0)
            dispatch(setStatusProfileAC(status))
    }

export const updatePhotoTC = (photo: File) =>
    async (dispatch: Dispatch<AppActionType>) => {
        const data = await api['profileApi'].updateProfilePhoto(photo)
        if (data.resultCode === 0)
            dispatch(updatePhotoProfileAC(data.data))
    }

export const saveProfileDataTC = (profileFormData: ProfileBlockFormData) =>
    async (dispatch: AppDispatch, getState: () => AppStateType) => {
        const authId = getState().auth.id;
        const data = await api['profileApi'].saveProfileFormData(profileFormData)
        if (data.resultCode === 0) {
            dispatch(getProfileUserTC(authId as number))
        }
        else {
            dispatch(stopSubmit('edit-profile', {_error: data.messages[0]}));
            // dispatch(stopSubmit('edit-profile', {'contacts': { 'facebook': data.messages[0]}}));
            return Promise.reject(data.messages[0])
        }
    }
