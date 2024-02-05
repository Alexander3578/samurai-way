import React from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {compose} from 'redux';
import {AppStateType} from '../../redux/redux-store';
import {withAuthRedirect} from '../../hoc/AuthRedirect';
import {
    getProfileStatusTC,
    getProfileUserTC,
    ProfileUserType,
    updateProfileStatusTC
} from '../../redux/profile-reducer';

class ProfileApi extends React.Component<PropsType, ProfilePropsType> {

    componentDidMount() {
        debugger;
        let userId = this.props.match.params.userId && this.props.match.params.userId !== ':userId'
            ? this.props.match.params.userId : this.props.authId
        this.props.getProfileUser(Number(userId));
        this.props.getProfileStatus(Number(userId))
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateProfileStatus={this.props.updateProfileStatus}
                     authId={this.props.authId}/>
        )
    };
}

export type ProfilePropsType = mapStateToPropsType & mapDispatchToPropsType

type PropsType = RouteComponentProps<paramsType> & ProfilePropsType

type mapStateToPropsType = {
    profile: ProfileUserType | null
    status: string
    authId: number | null
}

type mapDispatchToPropsType = {
    getProfileUser: (userId: number | null) => void
    getProfileStatus: (userId: number | null) => void
    updateProfileStatus: (status: string) => void
}

type paramsType = {
    userId: string
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profile: state.profile.profile,
        status: state.profile.status,
        authId: state.auth.id
    }
}

// const withURLDataContainerComponent = withRouter(ProfileApi)

// export const ProfileContainer = withAuthRedirect(connect(mapStateToProps, {getProfileUser: getProfileUserTC})(withURLDataContainerComponent))

export const ProfileContainer = compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, {
        getProfileUser: getProfileUserTC, getProfileStatus: getProfileStatusTC,
        updateProfileStatus: updateProfileStatusTC
    }),
    withRouter,
)(ProfileApi)