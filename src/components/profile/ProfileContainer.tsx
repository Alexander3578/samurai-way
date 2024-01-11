import React from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {ProfileUserType, setUserProfileAC} from '../../redux/profile-reducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {api} from '../../api/api';

class ProfileApi extends React.Component<PropsType, ProfilePropsType>{

    componentDidMount() {
        let userId = this.props.match.params.userId ? this.props.match.params.userId : 29740
        api['profileApi'].getProfileUser(userId)
            .then(data => {
                this.props.setUserProfile(data)
            })
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
    authId: number | null
}

type mapDispatchToPropsType = {
    setUserProfile: (profile: ProfileUserType) => void
}

type paramsType = {
    userId: string
}

let mapStateToProps = (state: AppStateType):mapStateToPropsType => {
    return {
        profile: state.profile.profile,
        authId: state.auth.id
    }
}

const withURLDataContainerComponent = withRouter(ProfileApi)

export const ProfileContainer = connect(mapStateToProps, {setUserProfile: setUserProfileAC})(withURLDataContainerComponent)

