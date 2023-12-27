import React from 'react';
import {MyPosts} from '../MyPosts';
import {PostPropsType} from './Post';
import {addPostAC, onChangeNewPostAC} from '../../../../redux/profile-reducer';
import {connect} from 'react-redux';
import {AppStateType} from '../../../../redux/redux-store';
import {ActionType} from '../../../../redux';

type MapStateToPropsType = {
    postData: PostPropsType[]
    newPostText: string
}

type MapDispatchToPropsType = {
    updateNewPost: (text: string) => void
    addPost: () => void
}

export type MyPostsPropsType = MapDispatchToPropsType & MapStateToPropsType;

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        postData: state.profile.postData,
        newPostText: state.profile.newPostText
    }
}

let mapDispatchToProps = (dispatch: (action: ActionType) => void): MapDispatchToPropsType => {
    return {
        updateNewPost: (text: string) => {
            dispatch((onChangeNewPostAC(text)))
        },
        addPost: () => dispatch(addPostAC())
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

