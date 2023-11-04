import React from 'react';
import {MyPosts} from './myPosts/MyPosts';
import {ProfileInfo} from './profileInfotsx/ProfileInfo';
import {PostPropsType} from './myPosts/post/Post';

type ProfilePropsType = {
    postData: PostPropsType[]
}

export const Profile:React.FC<ProfilePropsType> = ({postData}) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={postData}/>
        </div>
    );
};

