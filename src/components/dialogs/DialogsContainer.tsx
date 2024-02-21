import React from 'react';
import {DialogItemPropsType} from './dialogItem/DialogItem';
import {MessagePropsType} from './messageItem/MessageItem';
import {connect} from 'react-redux';
import {AppDispatch, AppStateType} from 'redux/redux-store';
import {Dialogs} from './Dialogs';
import {compose} from 'redux';
import {addMessageAC} from 'redux/dialog-reducer';
import {withAuthRedirect} from 'hoc/AuthRedirect';

type MapStateToPropsType = {
    dialogData: Array<DialogItemPropsType>
    messagesData: MessagePropsType[]
}

type MapDispatchToPropsType = {
    addNewMessage: (newMessageBody: string) => void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogData: state.dialogs.dialogData,
        messagesData: state.dialogs.messagesData,
    }
}

let mapDispatchToProps = (dispatch: AppDispatch): MapDispatchToPropsType => {
    return {
        addNewMessage: (newMessageBody: string) => dispatch(addMessageAC(newMessageBody))
    }
}

// export const DialogsContainer = withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs));

export default compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogs)