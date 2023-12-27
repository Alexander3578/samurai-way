import {ActionType} from './index';
import {v1} from 'uuid';
import {DialogItemPropsType} from '../components/dialogs/dialogItem/DialogItem';
import {MessagePropsType} from '../components/dialogs/messageItem/MessageItem';

const onChangeNewMessageAT = 'CHANGE-NEW-MESSAGE'
const addMessageAT = 'ADD-MESSAGE';

export type ActionDialogType = ReturnType<typeof onChangeMessageAC> | ReturnType<typeof addMessageAC>;

export type DialogsType = {
    dialogData: Array<DialogItemPropsType>
    messagesData: Array<MessagePropsType>
    newMessage: string
}

const initialState: DialogsType = {
    'messagesData': [
        {id: v1(), name: 'Hi'},
        {id: v1(), name: 'How are you?'},
        {id: v1(), name: 'Yep'},
        {id: v1(), name: 'Yep'},
        {id: v1(), name: 'Yep'},
    ],
    'dialogData': [
        {id: v1(), name: 'Alex'},
        {id: v1(), name: 'Max'},
        {id: v1(), name: 'John'},
        {id: v1(), name: 'Jack'},
        {id: v1(), name: 'Tom'},
    ],
    'newMessage': ''
}

export const dialogReducer = (state: DialogsType = initialState, action: ActionType): DialogsType => {
    switch (action.type) {
        case onChangeNewMessageAT: {
            return {...state, newMessage: action.payload.newMessage};
        }
        case  addMessageAT: {
            return {
                ...state,
                messagesData: [...state['messagesData'], {
                    id: action.payload.id,
                    name: state.newMessage,
                }],
                newMessage: ''
            };
        }
        default:
            return state
    }
};

export const onChangeMessageAC = (newMessage: string) => {
    return {
        type: onChangeNewMessageAT,
        payload: {
            newMessage
        }
    } as const
}

export const addMessageAC = () => ({
    type: addMessageAT,
    payload: {
        id: v1()
    }
} as const)