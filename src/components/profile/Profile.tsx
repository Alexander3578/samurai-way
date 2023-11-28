import React from 'react';
import {MyPosts} from './myPosts/MyPosts';
import {ProfileInfo} from './profileInfotsx/ProfileInfo';
import {PostPropsType} from './myPosts/post/Post';
import {ActionType} from '../../redux/state';

type ProfilePropsType = {
    postData: PostPropsType[]
    dispatch: (action: ActionType) => void
    newPostText: string
}

export const Profile:React.FC<ProfilePropsType> = (props) => {
    const {postData, dispatch, newPostText} = props;
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={postData}
                     dispatch={dispatch}
                     newPostText={newPostText}/>
        </div>
    );
};

