import React from 'react';
import {DialogItemPropsType} from './dialogItem/DialogItem';
import {MessagePropsType} from './messageItem/MessageItem';
import {addMessageAC, onChangeMessageAC} from '../../redux/dialog-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {ActionType} from '../../redux';

type MapStateToPropsType = {
    dialogData: Array<DialogItemPropsType>
    messagesData: MessagePropsType[]
    newMessageText: string
}

type MapDispatchToPropsType = {
    onChangeMessage: (message: string) => void
    addNewMessage: () => void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogData: state.dialogs.dialogData,
        messagesData: state.dialogs.messagesData,
        newMessageText: state.dialogs.newMessage
    }
}

let mapDispatchToProps = (dispatch: (action: ActionType) => void): MapDispatchToPropsType => {
    return {
        onChangeMessage: (message: string) => dispatch(onChangeMessageAC(message)),
        addNewMessage: () => dispatch(addMessageAC())
    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
