import React from 'react';
import {DialogItem, DialogItemPropsType} from './dialogItem/DialogItem';
import {Message, MessagePropsType} from './messageItem/MessageItem';
import {S} from './Dialogs_Styles'

export const Dialogs:React.FC = (props) => {

    const dialogData:Array<DialogItemPropsType> = [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Max'},
        {id: 3, name: 'John'},
        {id: 4, name: 'Jack'},
        {id: 5, name: 'Tom'},
    ]

    const messagesData:Array<MessagePropsType> = [
        {id: 1, name: 'Hi'},
        {id: 2, name: 'How are you?'},
        {id: 3, name: 'Yep'},
        {id: 4, name: 'Yep'},
        {id: 5, name: 'Yep'},
    ]

    let dialogItems = dialogData.map((dialog: DialogItemPropsType) => <DialogItem name={dialog.name} id={dialog.id}/>)

    let messageItems = messagesData.map((message: MessagePropsType) => <Message name={message.name} id={message.id}/>)

    return (
        <S.Dialogs>
            <S.DialogsItems>
                {
                    dialogItems
                }
            </S.DialogsItems>
            <S.Messages>
                {
                    messageItems
                }
            </S.Messages>
        </S.Dialogs>
    );
};

