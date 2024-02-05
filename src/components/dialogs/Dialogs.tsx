import React from 'react';
import {DialogItem, DialogItemPropsType} from './dialogItem/DialogItem';
import {Message, MessagePropsType} from './messageItem/MessageItem';
import {S} from './Dialogs_Styles'
import {DialogsPropsType} from './DialogsContainer';
import {DialogMessageForm, SendMessageFormValuesType} from './dialogMessageForm/DialogMessageForm';

export const Dialogs: React.FC<DialogsPropsType> = ({
                                                        dialogData,
                                                        messagesData,
                                                        addNewMessage
                                                    }) => {

    let dialogItems = dialogData.map((dialog: DialogItemPropsType) => <DialogItem key={dialog.id} name={dialog.name}
                                                                                  id={dialog.id}/>)

    let messageItems = messagesData.map((message: MessagePropsType) => <Message key={message.id} name={message.name}
                                                                                id={message.id}/>)

    const onSendMessageSubmit = (sendMessageFormValues: SendMessageFormValuesType) => {
        addNewMessage(sendMessageFormValues.newMessageText)
    }

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
                <DialogMessageForm onSubmit={onSendMessageSubmit}/>
            </S.Messages>
        </S.Dialogs>
    );
};

