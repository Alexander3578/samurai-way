import React from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {compose} from 'redux';
import {AppStateType} from 'redux/redux-store';
import {withAuthRedirect} from 'hoc/AuthRedirect';
import {
    getProfileStatusTC,
    getProfileUserTC,
    ProfileUserType, saveProfileDataTC,
    updatePhotoTC,
    updateProfileStatusTC
} from 'redux/profile-reducer';
import {ProfileBlockFormData} from 'components/profile/profileInfotsx/profileBlockForm/profileBlockForm';

class ProfileApi extends React.Component<PropsType, ProfilePropsType> {

    refreshProfile() {
        let userId = this.props.match.params.userId && this.props.match.params.userId !== ':userId'
            ? this.props.match.params.userId : this.props.authId
        this.props.getProfileUser(Number(userId));
        this.props.getProfileStatus(Number(userId))
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<ProfilePropsType>) {
        if(this.props.match.params.userId !== prevProps.match.params.userId)
        this.refreshProfile();
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateProfileStatus={this.props.updateProfileStatus}
                     authId={this.props.authId}
                     updatePhoto={this.props.updatePhoto}
                     saveProfileData={this.props.saveProfileData}/>
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
    updatePhoto: (photo: File) => void
    saveProfileData: (profileFormData:ProfileBlockFormData) => Promise<undefined | string>
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

export default compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, {
        getProfileUser: getProfileUserTC, getProfileStatus: getProfileStatusTC,
        updateProfileStatus: updateProfileStatusTC, updatePhoto: updatePhotoTC,
        saveProfileData: saveProfileDataTC
    }),
    withRouter,
)(ProfileApi)