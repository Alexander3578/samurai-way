import {ActionType, ProfileType} from './store';

const onChangeNewPostAT = 'CHANGE-NEW-POST';
const addPostAT = 'ADD-POST';

export type ActionProfileType = ReturnType<typeof addPostAC> | ReturnType<typeof onChangeNewPostAC>;

const initialState:ProfileType = {
    'postData': [
        {id: 1, postName: 'OOOOO', likesCount: 5},
        {id: 2, postName: 'PPPPP', likesCount: 333},
        {id: 3, postName: 'EEEEE', likesCount: 22},
        {id: 4, postName: 'ХХХХХ', likesCount: 3}
    ],
    'newPostText': ''
}

export const profileReducer = (state: ProfileType = initialState, action: ActionType):ProfileType => {
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