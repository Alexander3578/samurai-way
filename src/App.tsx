import React from 'react';
import './App.css';
import Header from './components/header/Header';
import {Navber} from './components/navbar/Navber';
import {Route} from 'react-router-dom';
import {Profile} from './components/profile/Profile';
import {News} from './components/news/News';
import {Music} from './components/music/Music';
import {Settings} from './components/settings/Settings';
import {ActionType, DialogsType, ProfileType} from './redux/store';
import {DialogsContainer} from './components/dialogs/DialogsContainer';

type AppPropsType = {
    profile: ProfileType
    dialogs: DialogsType
    dispatch: (action: ActionType) => void
    newPostText: string
    newMessageText: string
}

const App: React.FC<AppPropsType> = (props) => {
    const {profile, dispatch, newPostText} = props

    return (
        <div className="app-wrapper">
            <Header/>
            <Navber/>
            <div className="app-wrapper-content">
                <Route path={'/profile'} render={() => <Profile postData={profile.postData}
                                                                dispatch={dispatch}
                                                                newPostText={newPostText}/>}/>
                <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export default App;
