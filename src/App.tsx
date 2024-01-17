import React from 'react';
import './App.css';
import {Navber} from './components/navbar/Navber';
import {Route} from 'react-router-dom';
import {News} from './components/news/News';
import {Music} from './components/music/Music';
import {Settings} from './components/settings/Settings';
import {DialogsContainer} from './components/dialogs/DialogsContainer';
import {UsersContainer} from './components/users/UsersContainer';
import {DialogsType} from './redux/dialog-reducer';
import {ProfileType} from './redux/profile-reducer';
import {ProfileContainer} from './components/profile/ProfileContainer';
import {HeaderContainer} from './components/header/HeaderContainer';
import {AppActionType} from './redux/redux-store';

type AppPropsType = {
    profile: ProfileType
    dialogs: DialogsType
    dispatch: (action: AppActionType) => void
    newPostText: string
    newMessageText: string
}

const App: React.FC<AppPropsType> = (props) => {
    return (
        <div className="app-wrapper">
            <HeaderContainer/>
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
