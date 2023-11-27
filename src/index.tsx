import React from 'react';
import './index.css';
import {store} from './redux/state';
import App from './App';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

const rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App dialogs={store.getState()['dialogs']}
                     profile={store.getState()['profile']}
                     addPost={store.addPost.bind(store)}
                     onPostChange={store.onPostChange.bind(store)}
                     newPostText={store.getState()['profile'].newPostText}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireTree();

store.subscribe(rerenderEntireTree);

