import React from 'react';
import './index.css';
import {addPost, onPostChange, state, StateType, subscribe} from './redux/state';
import App from './App';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

let rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>=
            <App dialogs={state['dialogs']}
                 profile={state['profile']}
                 addPost={addPost}
                 onPostChange={onPostChange}
                 newPostText={state['profile'].newPostText}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree(state);

subscribe(rerenderEntireTree);

