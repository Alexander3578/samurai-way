import {v1} from 'uuid';
import {DialogItemPropsType} from '../components/dialogs/dialogItem/DialogItem';
import {MessagePropsType} from '../components/dialogs/messageItem/MessageItem';

const addMessageAT = 'ADD-MESSAGE';

export type ActionDialogType = ReturnType<typeof addMessageAC>;

export type DialogsType = {
    dialogData: Array<DialogItemPropsType>
    messagesData: Array<MessagePropsType>
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
}

export const dialogReducer = (state: DialogsType = initialState, action: ActionDialogType): DialogsType => {
    switch (action.type) {
        case  addMessageAT: {
            return {
                ...state,
                messagesData: [...state['messagesData'], {
                    id: action.payload.id,
                    name: action.payload.newMessageBody
                }],
            };
        }
        default:
            return state
    }
};

//ACTION CREATORS

export const addMessageAC = (newMessageBody: string) => ({
    type: addMessageAT,
    payload: {
        id: v1(),
        newMessageBody
    }
} as const)