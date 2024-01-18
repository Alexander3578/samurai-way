import {Redirect} from 'react-router-dom';
import React, {ComponentType} from 'react';
import {connect} from 'react-redux';
import {AppStateType} from '../redux/redux-store';

type MapStateToPropsType = {
    isAuth: boolean
}

const MapStateToProps = (state: AppStateType):MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const withAuthRedirect = <T,>(Component: ComponentType<T>) => {
    return connect(MapStateToProps)((props:MapStateToPropsType) => {

        let {isAuth, ...restProps} = props

        return isAuth ? <Component {...restProps as T}/> : <Redirect to={'/login'}/>
    })
}