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
import {DialogsType, ProfileType} from './redux/state';

type AppPropsType = {
    profile: ProfileType
    dialogs: DialogsType
    addPost: (postName: string) => void
}

const App: React.FC<AppPropsType> = ({profile, dialogs, addPost}) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navber/>
                <div className="app-wrapper-content">
                    {/*<Route path={'/profile'} component={Profile}/>*/}
                    {/*<Route path={'/dialogs'} component={Dialogs}/>*/}
                    {/*<Route path={'/news'} component={News}/>*/}
                    {/*<Route path={'/music'} component={Music}/>*/}
                    {/*<Route path={'/settings'} component={Settings}/>*/}

                    <Route path={'/profile'} render={()=><Profile postData={profile.postData}
                                                                  addPost={addPost}/>}/>
                    <Route path={'/dialogs'} render={()=><Dialogs dialogData={dialogs.dialogData}
                                                                  messagesData={dialogs.messagesData}/>}/>
                    <Route path={'/news'} render={()=><News/>}/>
                    <Route path={'/music'} render={()=><Music/>}/>
                    <Route path={'/settings'} render={()=><Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
