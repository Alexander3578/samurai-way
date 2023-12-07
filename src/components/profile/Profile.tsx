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
    const {postData, dispatch, newPostText} = props;
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer postData={postData}
                              dispatch={dispatch}
                              newPostText={newPostText}/>
        </div>
    );
};

