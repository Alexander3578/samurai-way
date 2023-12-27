import {ActionType} from './index';
import {v1} from 'uuid';
import {PostPropsType} from '../components/profile/myPosts/post/Post';


const onChangeNewPostAT = 'CHANGE-NEW-POST';
const addPostAT = 'ADD-POST';

export type ProfileType = {
    postData: Array<PostPropsType>
    newPostText: string
}

export type ActionProfileType = ReturnType<typeof addPostAC> | ReturnType<typeof onChangeNewPostAC>;

const initialState: ProfileType = {
    'postData': [
        {id: v1(), postName: 'OOOOO', likesCount: 5},
        {id: v1(), postName: 'PPPPP', likesCount: 333},
        {id: v1(), postName: 'EEEEE', likesCount: 22},
        {id: v1(), postName: 'ХХХХХ', likesCount: 3}
    ],
    'newPostText': ''
}

export const profileReducer = (state: ProfileType = initialState, action: ActionType): ProfileType => {
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