import React, {ChangeEvent} from 'react';
import {DialogItem, DialogItemPropsType} from './dialogItem/DialogItem';
import {Message, MessagePropsType} from './messageItem/MessageItem';
import {S} from './Dialogs_Styles'
import {DialogsPropsType} from './DialogsContainer';

export const Dialogs: React.FC<DialogsPropsType> = ({dialogData, messagesData, newMessageText, onChangeMessage, addNewMessage}) => {

    let dialogItems = dialogData.map((dialog: DialogItemPropsType) => <DialogItem name={dialog.name} id={dialog.id}/>)

    let messageItems = messagesData.map((message: MessagePropsType) => <Message name={message.name} id={message.id}/>)

    const onChangeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        onChangeMessage(e.currentTarget.value)
    }

    const addNewMessageHandler = () => addNewMessage();

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
                <S.SendMessageWrap>
                    <S.MessageField value={newMessageText}
                                    onChange={onChangeMessageHandler}
                                    placeholder={'Enter your message!'}/>
                    <S.SendMessageButton onClick={addNewMessageHandler}>Send</S.SendMessageButton>
                </S.SendMessageWrap>
            </S.Messages>
        </S.Dialogs>
    );
};

