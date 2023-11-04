import React from 'react';
import {DialogItem, DialogItemPropsType} from './dialogItem/DialogItem';
import {Message, MessagePropsType} from './messageItem/MessageItem';
import {S} from './Dialogs_Styles'

type DialogsPropsType = {
    dialogData: Array<DialogItemPropsType>
    messagesData: MessagePropsType[]
}

export const Dialogs:React.FC<DialogsPropsType> = ({dialogData, messagesData}) => {

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

