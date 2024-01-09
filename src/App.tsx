import React from 'react';
import './App.css';
import Header from './components/header/Header';
import {Navber} from './components/navbar/Navber';
import {Route} from 'react-router-dom';
import {News} from './components/news/News';
import {Music} from './components/music/Music';
import {Settings} from './components/settings/Settings';
import {DialogsContainer} from './components/dialogs/DialogsContainer';
import {UsersContainer} from './components/users/UsersContainer';
import {DialogsType} from './redux/dialog-reducer';
import {ActionType} from './redux';
import {ProfileType} from './redux/profile-reducer';
import {ProfileContainer} from './components/profile/ProfileContainer';

type AppPropsType = {
    profile: ProfileType
    dialogs: DialogsType
    dispatch: (action: ActionType) => void
    newPostText: string
    newMessageText: string
}

const App: React.FC<AppPropsType> = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navber/>
            <div className="app-wrapper-content">
                <Route path={'/profile/:userId?'} render={() => <ProfileContainer />}/>
                <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                <Route path={'/users'} render={() => <UsersContainer />}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export default App;
