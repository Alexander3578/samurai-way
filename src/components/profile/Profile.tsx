import React from 'react';
import {MyPosts} from './myPosts/MyPosts';
import {ProfileInfo} from './profileInfotsx/ProfileInfo';
import {PostPropsType} from './myPosts/post/Post';

type ProfilePropsType = {
    postData: PostPropsType[]
    addPost: () => void
    onPostChange: (postName: string) => void
    newPostText: string
}

export const Profile:React.FC<ProfilePropsType> = (props) => {
    const {postData, addPost, onPostChange, newPostText} = props;
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={postData}
                     addPost={addPost}
                     onPostChange={onPostChange}
                     newPostText={newPostText}/>
        </div>
    );
};

