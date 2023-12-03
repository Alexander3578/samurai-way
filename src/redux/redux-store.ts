import {combineReducers, createStore} from 'redux';
import {profileReducer} from './profile-reducer';
import {dialogReducer} from './dialog-reducer';

let reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogReducer
});

export let store = createStore(reducers);