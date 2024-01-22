import React from 'react';
import s from './ProfileInfo.module.css';
import {ProfileUserType} from '../../../redux/profile-reducer';
import {Preloader} from '../../comman/Preloader';
import {ProfileStatus} from './profileStatus/ProfileStatus';

type ProfileInfoPropsType = {
    profile: ProfileUserType | null
}

export const ProfileInfo:React.FC<ProfileInfoPropsType> = (props) => {
    return !props.profile
        ? <Preloader/>
        : <div>
            {/*<div className={s.contentImg}>*/}
            {/*    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Best_Nature_Picture_of_the_day.jpg" alt={'view'}/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile?.photos.small} alt={'user photo'}/>
                {props.profile?.fullName}
                <ProfileStatus status={props.profile.aboutMe}/>
            </div>
        </div>
};

