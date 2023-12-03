import React from 'react';
import './index.css';
import App from './App';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {store} from './redux/redux-store';

const rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App dialogs={store.getState()['dialogs']}
                     profile={store.getState()['profile']}
                     dispatch={store.dispatch.bind(store)}
                     newPostText={store.getState()['profile'].newPostText}
                     newMessageText={store.getState().dialogs.newMessage} />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireTree();

store.subscribe(rerenderEntireTree);

