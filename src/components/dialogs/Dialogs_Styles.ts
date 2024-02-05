import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import {Field} from 'redux-form';

//DIALOGS

const Dialogs = styled.div`
  display: grid;
  grid-template-columns: 2fr 10fr;
`

//DIALOG ITEMS

const DialogsItems = styled.div`
  padding: 10px;
`

const DialogItem = styled.div`

`

const MyNavLink = styled(NavLink)`

`

//MESSAGES

const Messages = styled.div`
  padding: 10px;
`

const Message = styled.div`

`

const SendMessageWrap = styled.form`
  display: flex;
  gap: 10px;
  margin-top: 5px;
`

const MessageField = styled(Field)`
  resize: none;
  outline: transparent;
`

const SendMessageButton = styled.button`
  height: 36px;
`

export const S = {
    Dialogs,
    DialogsItems,
    DialogItem,
    MyNavLink,
    Messages,
    Message,
    MessageField,
    SendMessageButton,
    SendMessageWrap
}