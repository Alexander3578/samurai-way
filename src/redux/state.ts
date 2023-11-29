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
    newMessage: string
}

export type StateType = {
    profile: ProfileType
    dialogs: DialogsType
}

const onChangeNewPostAT = 'CHANGE-NEW-POST';
const addPostAT = 'ADD-POST';
const onChangeNewMessageAT = 'CHANGE-NEW-MESSAGE'
const addMessageAT = 'ADD-MESSAGE';

export type ActionType = addPostACType | onChangeNewPostACType | onChangeMessageACType | addMessageACType;

type StoreType = {
    _state: StateType
    _callSubscriber: () => void
    getState: () => StateType
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionType) => void

}

export const store: StoreType = {
    _state: {
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
            'newMessage': ''
        }
    },

    _callSubscriber() {
    },

    getState() {
        return this._state
    },

    subscribe(observer: () => void) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        switch(action.type){
            case addPostAT: {
                let newPost = {
                    id: 5,
                    postName: this._state.profile.newPostText,
                    likesCount: 0
                }
                this._state.profile.postData.push(newPost);
                this._state.profile.newPostText = '';
                this._callSubscriber();
                break;
            }
            case onChangeNewPostAT: {
                this._state.profile.newPostText = action.payload.postName;
                this._callSubscriber();
                break;
            }
            case onChangeNewMessageAT: {
                this._state.dialogs.newMessage = action.payload.newMessage;
                this._callSubscriber();
                break;
            }
            case  addMessageAT: {
                let newMessage = {
                    id: 6,
                    name: this._state.dialogs.newMessage,
                }
                this._state.dialogs.messagesData.push(newMessage);
                this._state.dialogs.newMessage = '';
                this._callSubscriber();
            }
        }
    }
}

type addPostACType = ReturnType<typeof addPostAC>

export const addPostAC = () => ({type: addPostAT} as const)


type onChangeNewPostACType = ReturnType<typeof onChangeNewPostAC>

export const onChangeNewPostAC = (newPostText: string) => {
    return {
        type: onChangeNewPostAT,
        payload: {
            postName: newPostText
        }
    } as const
}

type onChangeMessageACType = ReturnType<typeof onChangeMessageAC>

export const onChangeMessageAC = (newMessage: string) => {
    return {
        type: onChangeNewMessageAT,
        payload: {
            newMessage
        }
    } as const
}

type addMessageACType = ReturnType<typeof addMessageAC>

export const addMessageAC = () => ({type: addMessageAT} as const)