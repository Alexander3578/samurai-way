import React from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {getProfileUserTC, ProfileUserType} from '../../redux/profile-reducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';

class ProfileApi extends React.Component<PropsType, ProfilePropsType>{

    componentDidMount() {
        let userId = this.props.match.params.userId ? this.props.match.params.userId : 29740
        this.props.getProfileUser(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    };
}

export type ProfilePropsType = mapStateToPropsType & mapDispatchToPropsType

type PropsType = RouteComponentProps<paramsType> & ProfilePropsType

type mapStateToPropsType = {
    profile: ProfileUserType | null
}

type mapDispatchToPropsType = {
    getProfileUser: (userId: number | string) => void
}

type paramsType = {
    userId: string
}

let mapStateToProps = (state: AppStateType):mapStateToPropsType => {
    return {
        profile: state.profile.profile,
    }
}

const withURLDataContainerComponent = withRouter(ProfileApi)

export const ProfileContainer = connect(mapStateToProps, {getProfileUser: getProfileUserTC})(withURLDataContainerComponent)

