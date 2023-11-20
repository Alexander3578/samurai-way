import ReactDOM from 'react-dom';
import App from './App';
import {addPost, onPostChange, StateType} from './redux/state';
import React from 'react';

export let rerenderEntireTree = (state: StateType) => {

    ReactDOM.render(
        <App dialogs={state['dialogs']}
             profile={state['profile']}
             addPost={addPost}
             onPostChange={onPostChange}/>,
        document.getElementById('root')
    );
}