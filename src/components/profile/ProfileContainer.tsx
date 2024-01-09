import React from 'react';
import axios from 'axios';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {ProfileUserType, setUserProfileAC} from '../../redux/profile-reducer';
import {withRouter} from 'react-router-dom';

class ProfileApi extends React.Component<any, any>{

    componentDidMount() {
        let userId = this.props.match.params.userId ? this.props.match.params.userId : 2
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(res => {
                this.props.setUserProfile(res.data)
            })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    };
}
export type ProfilePropsType = mapStateToPropsType


type mapStateToPropsType = {
    profile: ProfileUserType | null
}

let mapStateToProps = (state: AppStateType):mapStateToPropsType => {
    return {
        profile: state.profile.profile

    }
}

const withURLDataContainerComponent = withRouter(ProfileApi)

export const ProfileContainer = connect(mapStateToProps, {setUserProfile: setUserProfileAC})(withURLDataContainerComponent)

