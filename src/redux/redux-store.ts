import {applyMiddleware, combineReducers, createStore} from 'redux';
import {ActionProfileType, profileReducer} from './profile-reducer';
import {ActionDialogType, dialogReducer} from './dialog-reducer';
import {ActionUsersType, usersReducer} from './users-reducer';
import {ActionAuthType, authReducer} from './auth-reducer';
import thunk, {ThunkAction, ThunkDispatch} from 'redux-thunk';

let rootReducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogReducer,
    usersPage: usersReducer,
    auth: authReducer
});


export type AppStateType = ReturnType<typeof rootReducers>;
export type AppActionType = ActionProfileType | ActionDialogType | ActionUsersType | ActionAuthType;
export type AppDispatch = ThunkDispatch<AppStateType, unknown, AppActionType>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppActionType>

export let store = createStore(rootReducers, applyMiddleware(thunk));

// @ts-ignore
window.store = store;