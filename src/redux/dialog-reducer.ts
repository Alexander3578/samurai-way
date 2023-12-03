import {ActionType, DialogsType} from './store';

const onChangeNewMessageAT = 'CHANGE-NEW-MESSAGE'
const addMessageAT = 'ADD-MESSAGE';

export type ActionDialogType = ReturnType<typeof onChangeMessageAC> | ReturnType<typeof addMessageAC>;

const initialState: DialogsType = {
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

export const dialogReducer = (state: DialogsType = initialState, action: ActionType): DialogsType => {
    switch (action.type) {
        case onChangeNewMessageAT: {
            state.newMessage = action.payload.newMessage;
            return state;
        }
        case  addMessageAT: {
            let newMessage = {
                id: 6,
                name: state.newMessage,
            }
            state.messagesData.push(newMessage);
            state.newMessage = '';
            return state;
        }
        default:
            return {...state}
    }
};

export type onChangeMessageACType = ReturnType<typeof onChangeMessageAC>

export const onChangeMessageAC = (newMessage: string) => {
    return {
        type: onChangeNewMessageAT,
        payload: {
            newMessage
        }
    } as const
}

export type addMessageACType = ReturnType<typeof addMessageAC>

export const addMessageAC = () => ({type: addMessageAT} as const)