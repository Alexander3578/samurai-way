import React from 'react';
import './App.css';
import {Navber} from './components/navbar/Navber';
import {Route, withRouter} from 'react-router-dom';
import {News} from './components/news/News';
import {Music} from './components/music/Music';
import {Settings} from './components/settings/Settings';
import {DialogsContainer} from './components/dialogs/DialogsContainer';
import {UsersContainer} from './components/users/UsersContainer';
import {ProfileContainer} from './components/profile/ProfileContainer';
import {HeaderContainer} from './components/header/HeaderContainer';
import {LoginContainer} from './components/login/Login';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {initializeAppTC} from './redux/app-reducer';
import {AppDispatch, AppStateType} from './redux/redux-store';
import {Preloader} from './components/comman/preloader/Preloader';

class App extends React.Component<AppPropsType> {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        return (this.props.initialized ?
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <Navber/>
                    <div className="app-wrapper-content">
                        <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
                        <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                        <Route path={'/users'} render={() => <UsersContainer/>}/>
                        <Route path={'/news'} render={() => <News/>}/>
                        <Route path={'/music'} render={() => <Music/>}/>
                        <Route path={'/settings'} render={() => <Settings/>}/>
                        <Route path={'/login'} render={() => <LoginContainer/>}/>
                    </div>
                </div>
                : <Preloader/>
        )
    }
}

export type AppPropsType = mapStateToPropsType & MapDispatchToPropsType;

type mapStateToPropsType = {
    initialized: boolean
}

type MapDispatchToPropsType = {
    initializeApp: () => void
}

const mapStateToProps = (state: AppStateType) => {
    return {
        initialized: state.app.isInizialised,
    }
}

const mapDispatchToProps = (dispatch: AppDispatch): MapDispatchToPropsType => {
    return {
        initializeApp: () => dispatch(initializeAppTC(true))
    }
}

export const AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(App)
