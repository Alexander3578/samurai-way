import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {AuthResponseDataType, setUserAuthDataAC} from '../../redux/auth-reducer';
import {api} from '../../api/api';

export class HeaderApi extends React.Component<HeaderPropsType, HeaderPropsType>{

    componentDidMount() {
        api.auth()
            .then((authObj) => {
                if(authObj.resultCode === 0)
                this.props.setUserAuthData(authObj.data)
            })
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
    setUserAuthData: (data: AuthResponseDataType) => void
}

const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export const HeaderContainer = connect(mapStateToProps, {setUserAuthData: setUserAuthDataAC})(HeaderApi)