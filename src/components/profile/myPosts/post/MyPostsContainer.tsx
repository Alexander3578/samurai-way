import React from 'react';
import {MyPosts} from '../MyPosts';
import {PostPropsType} from './Post';
import {addPostAC} from '../../../../redux/profile-reducer';
import {connect} from 'react-redux';
import {AppActionType, AppStateType} from '../../../../redux/redux-store';

type MapStateToPropsType = {
    postData: PostPropsType[]
}

type MapDispatchToPropsType = {
    addPost: (newPostBody: string) => void
}

export type MyPostsPropsType = MapDispatchToPropsType & MapStateToPropsType;

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        postData: state.profile.postData
    }
}

let mapDispatchToProps = (dispatch: (action: AppActionType) => void): MapDispatchToPropsType => {
    return {
        addPost: (newPostBody: string) => dispatch(addPostAC(newPostBody))
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

