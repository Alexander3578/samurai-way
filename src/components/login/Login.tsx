import React from 'react';
import {LoginReduxForm} from './LoginForm';
import {connect} from 'react-redux';
import {authLoginTC} from 'redux/auth-reducer';
import {LoginRequestData} from 'api/api';
import {AppStateType} from 'redux/redux-store';
import {Redirect} from 'react-router-dom';

const Login: React.FC<LoginPropsType> = (props) => {

    const onSubmitHandler = (formData: LoginRequestData) => {
        props.login(formData)
    }

    return (
        props.isAuth ? <Redirect to={'/profile'}/> :
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmitHandler}/>
        </div>
    );
};

type LoginPropsType = LoginMapDispatchToPropsType & LoginMapStateToPropsType

type LoginMapDispatchToPropsType = {
    login: (loginData: LoginRequestData) => void
}

type LoginMapStateToPropsType = {
    isAuth: boolean
}

let mapStateToProps = (state: AppStateType): LoginMapStateToPropsType => ({
    isAuth: state.auth.isAuth
})

export const LoginContainer = connect(mapStateToProps, {login: authLoginTC})(Login)
