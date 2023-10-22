import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

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

export const S = {
    Dialogs,
    DialogsItems,
    DialogItem,
    MyNavLink,
    Messages,
    Message
}