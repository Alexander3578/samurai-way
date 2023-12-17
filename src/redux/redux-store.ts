import {combineReducers, createStore} from 'redux';
import {profileReducer} from './profile-reducer';
import {dialogReducer} from './dialog-reducer';

let rootReducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogReducer
});

export type AppStateType = ReturnType<typeof rootReducers>;

export let store = createStore(rootReducers);