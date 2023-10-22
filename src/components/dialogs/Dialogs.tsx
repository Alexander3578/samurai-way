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
        <div className={s.dialog}>
            <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
        </div>
    )
}

type MessagePropsType = {
    name: string
}

export const Message:React.FC<MessagePropsType> = (props) => {

    const {name} = props

    return(
        <div className={s.message}>{name}</div>
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

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={'Alex'} id={1}/>
                <DialogItem name={'Max'} id={2}/>
                <DialogItem name={'John'} id={3}/>
                <DialogItem name={'Jack'} id={4}/>
                <DialogItem name={'Tom'} id={5}/>
            </div>
            <div className={s.messages}>
                <Message name={'Hi'}/>
                <Message name={'How are you?'}/>
                <Message name={'Yep'}/>
            </div>
        </div>
    );
};

