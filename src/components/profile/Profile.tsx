import React from 'react';
import {MyPosts} from './myPosts/MyPosts';
import {ProfileInfo} from './profileInfotsx/ProfileInfo';
import {PostPropsType} from './myPosts/post/Post';

type ProfilePropsType = {
    postData: PostPropsType[]
    addPost: (postName: string) => void
}

export const Profile:React.FC<ProfilePropsType> = ({postData, addPost}) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={postData}
                     addPost={addPost}/>
        </div>
    );
};

