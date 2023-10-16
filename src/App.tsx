import React from 'react';
import './App.css';
import Header from './components/header/Header';
import {Navber} from './components/navbar/Navber';
import {Dialogs} from './components/dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {Profile} from './components/profile/Profile';
import {News} from './components/news/News';
import {Music} from './components/music/Music';
import {Settings} from './components/settings/Settings';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navber/>
                <div className="app-wrapper-content">
                    <Route path={'/profile'} component={Profile}/>
                    <Route path={'/dialogs'} component={Dialogs}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
