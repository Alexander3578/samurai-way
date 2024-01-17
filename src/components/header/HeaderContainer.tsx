import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {authTC} from '../../redux/auth-reducer';

export class HeaderApi extends React.Component<HeaderPropsType, HeaderPropsType>{

    componentDidMount() {
       this.props.setUserAuthData();
    }

    render() {
        return <Header {...this.props}/>;
    }
}

export type HeaderPropsType = mapStateToPropsType & mapDispatchToPropsType;

type mapStateToPropsType = {
    isAuth: boolean
    login: string
}

type mapDispatchToPropsType = {
    setUserAuthData: () => void
}

const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export const HeaderContainer = connect(mapStateToProps, {setUserAuthData: authTC})(HeaderApi)