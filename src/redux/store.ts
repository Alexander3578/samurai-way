import {DialogItemPropsType} from '../components/dialogs/dialogItem/DialogItem';
import {MessagePropsType} from '../components/dialogs/messageItem/MessageItem';
import {PostPropsType} from '../components/profile/myPosts/post/Post';
import {ActionProfileType, profileReducer} from './profile-reducer';
import {ActionDialogType, dialogReducer} from './dialog-reducer';

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

export type ActionType = ActionProfileType | ActionDialogType;

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

    dispatch(action: ActionType) {
        this._state.profile = profileReducer(this._state.profile, action);
        this._state.dialogs = dialogReducer(this._state.dialogs, action);
        this._callSubscriber();
    }
}