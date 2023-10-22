import React from 'react';
import { S } from '../Dialogs_Styles';

export type MessagePropsType = {
    name: string
    id: number
}

export const Message:React.FC<MessagePropsType> = (props) => {

    const {name, id} = props

    return(
        <S.Message key={id}>
            {name}
        </S.Message>
    )
}