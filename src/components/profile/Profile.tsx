import React from 'react';
import {ProfileInfo} from './profileInfotsx/ProfileInfo';
import {MyPostsContainer} from './myPosts/post/MyPostsContainer';
import {ProfilePropsType} from './ProfileContainer';


export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div>
            <ProfileInfo profile = {props.profile}/>
            <MyPostsContainer/>
        </div>
    );
};

