import React from 'react';
import {Contact} from 'components/profile/profileInfotsx/profileContacts/Contacts';
import {ProfileUserType} from 'redux/profile-reducer';

type ProfileBlock = {
    profile: ProfileUserType | null
}

export const ProfileBlock:React.FC<ProfileBlock> = ({profile}) => {
    return (
        <div>
            <div>
                <b>Looking for a job: </b>{profile?.lookingForAJob ? 'yes' : 'no'}
            </div>
            {profile?.lookingForAJob &&
                <div>
                    <b>My professional skills:</b> {profile?.lookingForAJobDescription}
                </div>
            }
            <div>
                <b>About me: </b>{profile?.aboutMe}
            </div>
            <div>
                <b>Contacts: </b>{Object.entries(profile?.contacts || {}).map(([key, value]) =>
                <Contact key={key} contactTitle={key} contactValue={value}/>
            )}
            </div>
        </div>
    );
};

