import {combineReducers, createStore} from 'redux';
import {profileReducer} from './profile-reducer';
import {dialogReducer} from './dialog-reducer';
import {usersReducer} from './users-reducer';

let rootReducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogReducer,
    usersPage: usersReducer
});


export type AppStateType = ReturnType<typeof rootReducers>;

export let store = createStore(rootReducers);

// @ts-ignore
window.store = store;