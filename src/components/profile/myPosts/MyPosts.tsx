import React from 'react';
import {Post, PostPropsType} from './post/Post';
import s from './MyPosts.module.css'
import {MyPostsPropsType} from './post/MyPostsContainer';
import {AddPostProfileForm, PostProfileFormType} from './addPostProfileForm/AddPostProfileForm';

export const MyPosts: React.FC<MyPostsPropsType> = React.memo((props: MyPostsPropsType) => {
    const {postData, addPost} = props

    const onAddPostSubmit = (postProfileFormValues: PostProfileFormType): void => {
        addPost(postProfileFormValues.postText);
    }

    const postItems = postData.map((item: PostPropsType) => <Post key={item.id}
                                                                  postName={item.postName}
                                                                  id={item.id}
                                                                  likesCount={item.likesCount}/>)
    return (
        <div className={s.postBlock}>
            <h3>My Posts</h3>
            <AddPostProfileForm onSubmit={onAddPostSubmit}/>
            <div className={s.posts}>
                {
                    postItems
                }
            </div>
        </div>
    );
});

