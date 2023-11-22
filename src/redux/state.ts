import {DialogItemPropsType} from '../components/dialogs/dialogItem/DialogItem';
import {MessagePropsType} from '../components/dialogs/messageItem/MessageItem';
import {PostPropsType} from '../components/profile/myPosts/post/Post';

export type ProfileType = {
    postData: Array<PostPropsType>
    newPostText: string
}

export type DialogsType = {
    dialogData: Array<DialogItemPropsType>
    messagesData: Array<MessagePropsType>
}

export type StateType = {
    profile: ProfileType
    dialogs: DialogsType
}

let rerenderEntireTree = (state: StateType) => {
}

export const subscribe = (observer: (state: StateType)=> void) => {
    rerenderEntireTree = observer;
}

export const addPost = () => {
    let newPost = {
        id: 5,
        postName: state.profile.newPostText,
        likesCount: 0
    }
    state = {...state, profile: {...state.profile, postData: [ newPost, ...state.profile.postData]}};
    state.profile.newPostText = '';
    rerenderEntireTree(state);
}

export const onPostChange = (postName: string) => {
    state = {...state, profile: {...state.profile, newPostText: postName}}
    rerenderEntireTree(state);
}

export let state: StateType = {
    'profile': {
        'postData': [
            {id: 1, postName: 'OOOOO', likesCount: 5},
            {id: 2, postName: 'PPPPP', likesCount: 333},
            {id: 3, postName: 'EEEEE', likesCount: 22},
            {id: 4, postName: 'ХХХХХ', likesCount: 3}
        ],
        'newPostText': ''
    },
    'dialogs': {
        'messagesData': [
            {id: 1, name: 'Hi'},
            {id: 2, name: 'How are you?'},
            {id: 3, name: 'Yep'},
            {id: 4, name: 'Yep'},
            {id: 5, name: 'Yep'},
        ],
        'dialogData': [
            {id: 1, name: 'Alex'},
            {id: 2, name: 'Max'},
            {id: 3, name: 'John'},
            {id: 4, name: 'Jack'},
            {id: 5, name: 'Tom'},
        ],
    }
}
;