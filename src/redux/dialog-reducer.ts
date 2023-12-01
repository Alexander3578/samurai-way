import {ActionType, DialogsType} from './state';

const onChangeNewMessageAT = 'CHANGE-NEW-MESSAGE'
const addMessageAT = 'ADD-MESSAGE';

export type ActionDialogType = onChangeMessageACType | addMessageACType;

export const dialogReducer = (state: DialogsType, action:ActionType):DialogsType => {
    switch(action.type){
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
        default: return {...state}
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