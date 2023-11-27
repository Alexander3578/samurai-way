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

type StoreType = {
    _state: StateType
    getState: () => StateType
    onPostChange: (postName: string) => void
    addPost: () => void
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
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
        }
    },

    getState() {
        return this._state
    },

    onPostChange(postName: string) {
        // store = {...store, _state:{...this._state, profile: {...this._state.profile, newPostText: postName}}};
        this._state.profile.newPostText = postName;
        this._callSubscriber();
    },

    addPost() {
        let newPost = {
            id: 5,
            postName: this._state.profile.newPostText,
            likesCount: 0
        }
        // this._state = {
        //     ...this._state,
        //     profile: {...this._state.profile, postData: [newPost, ...this._state.profile.postData]}
        // };
        this._state.profile.postData.push(newPost);
        this._state.profile.newPostText = '';
        this._callSubscriber();
    },

    _callSubscriber() {
    },

    subscribe(observer: () => void) {
        this._callSubscriber = observer;
    }
}

