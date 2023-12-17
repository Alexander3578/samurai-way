import React from 'react';
import {ProfileInfo} from './profileInfotsx/ProfileInfo';
import {PostPropsType} from './myPosts/post/Post';
import {ActionType} from '../../redux/store';
import {MyPostsContainer} from './myPosts/post/MyPostsContainer';

type ProfilePropsType = {
    postData: PostPropsType[]
    dispatch: (action: ActionType) => void
    newPostText: string
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    );
};

