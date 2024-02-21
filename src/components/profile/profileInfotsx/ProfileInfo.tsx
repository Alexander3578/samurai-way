import React, {ChangeEvent} from 'react';
import s from './ProfileInfo.module.css';
import {ProfileUserType} from 'redux/profile-reducer';
import {Preloader} from '../../comman/preloader/Preloader';
import {ProfileHookStatus} from './profileStatus/ProfileHookStatus';
import avatar from 'assets/images/23ba420de78f87c008bf699e6eaddc9b.jpg';
import {ProfileBlock} from 'components/profile/profileInfotsx/profileBlock/profileBlock';


type ProfileInfoPropsType = {
    profile: ProfileUserType | null
    status: string
    updateProfileStatus: (status: string) => void
    authId: number | null
    updatePhoto: (photo: File) => void
}

export const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {
    const onSetNewProfileAvatar = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            props.updatePhoto(e.target.files[0])
        }
    }

    return !props.profile
        ? <Preloader/>
        : <div>
            {/*<div className={s.contentImg}>*/}
            {/*    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Best_Nature_Picture_of_the_day.jpg" alt={'view'}/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile?.photos.small ? props.profile?.photos.small : avatar}
                     alt={'user photo'}
                     className={s.mainPhoto}/>
                {props.profile.userId === props.authId && <input type={'file'} onChange={onSetNewProfileAvatar}/>}

                <div>
                    {props.profile?.fullName}
                </div>

                <ProfileHookStatus status={props.status}
                                   updateProfileStatus={props.updateProfileStatus}
                                   authId={props.authId}
                                   userId={props.profile.userId}/>

               <ProfileBlock profile={props.profile}/>

            </div>
        </div>
};

