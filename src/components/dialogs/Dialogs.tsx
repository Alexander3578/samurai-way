import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';

type DialogItemPropsType = {
    name: string
    id: number
}

export const DialogItem:React.FC<DialogItemPropsType> = (props) => {

    const {name, id} = props

    return(
        <div key={id} className={s.dialog}>
            <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
        </div>
    )
}

type MessagePropsType = {
    name: string
    id: number
}

export const Message:React.FC<MessagePropsType> = (props) => {

    const {name, id} = props

    return(
        <div key={id} className={s.message}>{name}</div>
    )
}

export const Dialogs:React.FC = () => {

    const dialogData = [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Max'},
        {id: 3, name: 'John'},
        {id: 4, name: 'Jack'},
        {id: 5, name: 'Tom'},
    ]

    const messagesData = [
        {id: 1, name: 'Hi'},
        {id: 2, name: 'How are you?'},
        {id: 3, name: 'Yep'},
        {id: 4, name: 'Yep'},
        {id: 5, name: 'Yep'},
    ]

    let dialogItems = dialogData.map((dialog: DialogItemPropsType) => <DialogItem name={dialog.name} id={dialog.id}/>)

    let messageItems = messagesData.map((message: MessagePropsType) => <Message name={message.name} id={message.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {
                    dialogItems
                }
            </div>
            <div className={s.messages}>
                {
                    messageItems
                }
            </div>
        </div>
    );
};

