import React from 'react';
import { S } from '../Dialogs_Styles';

export type DialogItemPropsType = {
    name: string
    id: number
}

export const DialogItem:React.FC<DialogItemPropsType> = (props) => {

    const {name, id} = props

    return(
        <S.DialogItem key={id}>
            <S.MyNavLink to={`/dialogs/${id}`}>{name}</S.MyNavLink>
        </S.DialogItem>
    )
}

