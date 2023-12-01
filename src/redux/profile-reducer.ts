import {ActionType, ProfileType} from './state';

const onChangeNewPostAT = 'CHANGE-NEW-POST';
const addPostAT = 'ADD-POST';

export type ActionProfileType = addPostACType | onChangeNewPostACType;

export const profileReducer = (state: ProfileType, action: ActionType):ProfileType => {
    switch (action.type) {
        case addPostAT: {
            let newPost = {
                id: 5,
                postName: state.newPostText,
                likesCount: 0
            }
            state.postData.push(newPost);
            state.newPostText = '';
            return state
        }
        case onChangeNewPostAT: {
            state.newPostText = action.payload.postName;
            return state
        }
        default: return {...state}
    }

}


export type addPostACType = ReturnType<typeof addPostAC>

export const addPostAC = () => ({type: addPostAT} as const)


export type onChangeNewPostACType = ReturnType<typeof onChangeNewPostAC>

export const onChangeNewPostAC = (newPostText: string) => {
    return {
        type: onChangeNewPostAT,
        payload: {
            postName: newPostText
        }
    } as const
}