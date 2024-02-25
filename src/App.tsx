import React from 'react';
import './App.css';
import {Navber} from 'components/navbar/Navber';
import {HashRouter, Redirect, Route, Switch, withRouter} from 'react-router-dom';
import {News} from 'components/news/News';
import {Music} from 'components/music/Music';
import {Settings} from 'components/settings/Settings';
import {UsersContainer} from 'components/users/UsersContainer';
import {HeaderContainer} from 'components/header/HeaderContainer';
import {LoginContainer} from 'components/login/Login';
import {connect, Provider} from 'react-redux';
import {compose} from 'redux';
import {initializeAppTC} from 'redux/app-reducer';
import {AppDispatch, AppStateType, store} from 'redux/redux-store';
import {Preloader} from 'components/comman/preloader/Preloader';
import {withSuspense} from 'hoc/withSuspense';

const DialogsContainer = React.lazy(() => import('./components/dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/profile/ProfileContainer'));

class App extends React.Component<AppPropsType> {

    catchAllUnhandleErrors (promiseRejectionEvent: Event) {
        //обработка ошибки
        alert('Common Error');
    }

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener('unhandledrejection', this.catchAllUnhandleErrors);
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandleErrors);
    }

    render() {

        const DialogContainerWithSuspense = withSuspense(DialogsContainer);
        const ProfileContainerWithSuspense = withSuspense(ProfileContainer);

        return (this.props.initialized ?
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <Navber/>
                    <div className="app-wrapper-content">
                        <Switch>
                            <Route exact path={'/'} render={() => <Redirect to={'/profile'}/>}/>
                            <Route path={'/profile/:userId?'} render={() => <ProfileContainerWithSuspense/>}/>
                            <Route path={'/dialogs'} render={() => <DialogContainerWithSuspense/>}/>
                            <Route path={'/users'} render={() => <UsersContainer/>}/>
                            <Route path={'/news'} render={() => <News/>}/>
                            <Route path={'/music'} render={() => <Music/>}/>
                            <Route path={'/settings'} render={() => <Settings/>}/>
                            <Route path={'/login'} render={() => <LoginContainer/>}/>
                            <Route path={'/*'} render={() => <div>404 NOT FOUND</div>}/>
                        </Switch>
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

const AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(App)

export const SamuraiApp = () => {
    return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}//basename={process.env.PUBLIC_URL}