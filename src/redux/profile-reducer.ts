import {v1} from 'uuid';
import {PostPropsType} from '../components/profile/myPosts/post/Post';
import {Dispatch} from 'redux';
import {AppActionType} from './redux-store';
import {api} from '../api/api';

const onChangeNewPostAT = 'CHANGE-NEW-POST';
const addPostAT = 'ADD-POST';
const setUserProfileAT = 'SET-USER-PROFILE';

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
    newPostText: string
    profile: null | ProfileUserType
}

export type ActionProfileType = ReturnType<typeof addPostAC> | ReturnType<typeof onChangeNewPostAC> | ReturnType<typeof setUserProfileAC>;

const initialState: ProfileType = {
    'postData': [
        {id: v1(), postName: 'OOOOO', likesCount: 5},
        {id: v1(), postName: 'PPPPP', likesCount: 333},
        {id: v1(), postName: 'EEEEE', likesCount: 22},
        {id: v1(), postName: 'ХХХХХ', likesCount: 3}
    ],
    'newPostText': '',
    'profile': null
}

export const profileReducer = (state: ProfileType = initialState, action: ActionProfileType): ProfileType => {
    switch (action.type) {
        case addPostAT: {
            return {...state, postData: [{
                    id: action.payload.id,
                    postName: state.newPostText,
                    likesCount: 0
                }, ...state['postData']], newPostText: ''}
        }
        case onChangeNewPostAT: {
            return {...state, newPostText: action.payload.postName}
        }
        case setUserProfileAT: {
            return {...state, profile: action.payload.profile}
        }
        default:
            return state
    }

}

export const addPostAC = () => ({
    type: addPostAT,
    payload: {
        id: v1()
    }
} as const)


export const onChangeNewPostAC = (newPostText: string) => {
    return {
        type: onChangeNewPostAT,
        payload: {
            postName: newPostText,
        }
    } as const
}

export const setUserProfileAC = (profile: ProfileUserType) => {
    return {
        type: setUserProfileAT,
        payload: {
            profile,
        }
    } as const
}

export const getProfileUserTC = (userId: number | string) =>
    (dispatch: Dispatch<AppActionType>) => {
        api['profileApi'].getProfileUser(userId)
            .then(data => {
                dispatch(setUserProfileAC(data))
            })
    }