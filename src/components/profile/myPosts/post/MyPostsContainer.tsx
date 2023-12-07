import React from 'react';
import {MyPosts} from '../MyPosts';
import {PostPropsType} from './Post';
import {ActionType} from '../../../../redux/store';
import {addPostAC, onChangeNewPostAC} from '../../../../redux/profile-reducer';

type MyPostsPropsType = {
    postData: PostPropsType[]
    dispatch: (action: ActionType) => void
    newPostText: string
}

export const MyPostsContainer: React.FC<MyPostsPropsType> = (props) => {
    const {postData, dispatch, newPostText} = props

    const addPost = (): void => {
        dispatch(addPostAC());
    }

    const onPostChange = (text: string) => {
        dispatch(onChangeNewPostAC(text));
    }

    return (
        <MyPosts updateNewPost={onPostChange}
                 addPost={addPost}
                 newPostText={newPostText}
                 postData={postData}/>
    );
};

