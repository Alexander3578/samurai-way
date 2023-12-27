import React from 'react';
import { S } from '../Dialogs_Styles';

export type DialogItemPropsType = {
    name: string
    id: string
}

export const DialogItem:React.FC<DialogItemPropsType> = ({name, id}) => {

    return(
        <S.DialogItem key={id}>
            <S.MyNavLink to={`/dialogs/${id}`}>{name}</S.MyNavLink>
        </S.DialogItem>
    )
}

