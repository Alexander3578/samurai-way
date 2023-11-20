import React from 'react';
import {MyPosts} from './myPosts/MyPosts';
import {ProfileInfo} from './profileInfotsx/ProfileInfo';
import {PostPropsType} from './myPosts/post/Post';

type ProfilePropsType = {
    postData: PostPropsType[]
    addPost: (postName: string) => void
    onPostChange: (postName: string) => void
}

export const Profile:React.FC<ProfilePropsType> = (props) => {
    const {postData, addPost, onPostChange} = props;
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={postData}
                     addPost={addPost}
                     onPostChange={onPostChange}/>
        </div>
    );
};

