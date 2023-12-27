import React from 'react';
import './index.css';
import App from './App';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {store} from './redux/redux-store';
import {Provider} from 'react-redux';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App dialogs={store.getState()['dialogs']}
                     profile={store.getState()['profile']}
                     dispatch={store.dispatch.bind(store)}
                     newPostText={store.getState()['profile'].newPostText}
                     newMessageText={store.getState().dialogs.newMessage}/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);


