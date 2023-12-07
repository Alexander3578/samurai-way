import React from 'react';
import {DialogItemPropsType} from './dialogItem/DialogItem';
import {MessagePropsType} from './messageItem/MessageItem';
import {ActionType} from '../../redux/store';
import {addMessageAC, onChangeMessageAC} from '../../redux/dialog-reducer';
import {Dialogs} from './Dialogs';

type DialogsPropsType = {
    dialogData: Array<DialogItemPropsType>
    messagesData: MessagePropsType[]
    newMessageText: string
    dispatch: (action: ActionType) => void
}

export const DialogsContainer: React.FC<DialogsPropsType> = ({dialogData, messagesData, newMessageText, dispatch}) => {

    const onChangeMessageHandler = (message: string) => {
        dispatch(onChangeMessageAC(message));
    }

    const addNewMessageHandler = () => dispatch(addMessageAC())

    return (
    <Dialogs dialogData={dialogData}
             messagesData={messagesData}
             newMessageText={newMessageText}
             onChangeMessage={onChangeMessageHandler}
             addNewMessage={addNewMessageHandler}/>
    );
};

