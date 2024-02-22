import React, {ChangeEvent, useState} from 'react';
import s from './ProfileInfo.module.css';
import {ProfileUserType} from 'redux/profile-reducer';
import {Preloader} from '../../comman/preloader/Preloader';
import {ProfileHookStatus} from './profileStatus/ProfileHookStatus';
import avatar from 'assets/images/23ba420de78f87c008bf699e6eaddc9b.jpg';
import {ProfileBlock} from 'components/profile/profileInfotsx/profileBlock/profileBlock';
import {
    ProfileBlockFormData,
    ProfileBlockReduxForm
} from 'components/profile/profileInfotsx/profileBlockForm/profileBlockForm';


type ProfileInfoPropsType = {
    profile: ProfileUserType | null
    status: string
    updateProfileStatus: (status: string) => void
    authId: number | null
    updatePhoto: (photo: File) => void
    saveProfileData: (FormData: ProfileBlockFormData) => Promise<undefined | string>
}

export const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {

    let [editMode, setEditMode] = useState(false)
    const isOwner = props.profile?.userId === props.authId;

    const onSetNewProfileAvatar = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            props.updatePhoto(e.target.files[0])
        }
    }

    const onHandleBlockFormSubmit = (formData: ProfileBlockFormData) => {
        props.saveProfileData(formData)
            .then(() => setEditMode(false))
    }

    return !props.profile
        ? <Preloader/>
        : <div>
            <div className={s.descriptionBlock}>
                <img src={props.profile?.photos.small ? props.profile?.photos.small : avatar}
                     alt={'user photo'}
                     className={s.mainPhoto}/>
                {isOwner && <input type={'file'} onChange={onSetNewProfileAvatar}/>}

                <ProfileHookStatus status={props.status}
                                   updateProfileStatus={props.updateProfileStatus}
                                   authId={props.authId}
                                   userId={props.profile.userId}/>

                {editMode ? <ProfileBlockReduxForm initialValues={props.profile}
                                                   profile={props.profile}
                                                   onSubmit={onHandleBlockFormSubmit}/>
                    : <ProfileBlock profile={props.profile}
                                    isOwner={isOwner}
                                    goToEditMode={() => setEditMode(true)}/>}

            </div>
        </div>
};

