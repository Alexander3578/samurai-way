import {ActionProfileType} from './profile-reducer'
import {ActionDialogType} from './dialog-reducer'
import {ActionUsersType} from './users-reducer'
export type ActionType = ActionProfileType | ActionDialogType | ActionUsersType;
