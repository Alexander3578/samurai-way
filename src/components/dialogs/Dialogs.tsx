import React, {ChangeEvent} from 'react';
import {DialogItem, DialogItemPropsType} from './dialogItem/DialogItem';
import {Message, MessagePropsType} from './messageItem/MessageItem';
import {S} from './Dialogs_Styles'
import {ActionType, addMessageAC, onChangeMessageAC} from '../../redux/state';

type DialogsPropsType = {
    dialogData: Array<DialogItemPropsType>
    messagesData: MessagePropsType[]
    newMessageText: string
    dispatch: (action: ActionType) => void
}

export const Dialogs: React.FC<DialogsPropsType> = ({dialogData, messagesData, newMessageText, dispatch}) => {

    let dialogItems = dialogData.map((dialog: DialogItemPropsType) => <DialogItem name={dialog.name} id={dialog.id}/>)

    let messageItems = messagesData.map((message: MessagePropsType) => <Message name={message.name} id={message.id}/>)

    const onChangeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(onChangeMessageAC(e.currentTarget.value));
    }

    const addNewMessageHandler = () => dispatch(addMessageAC())

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

