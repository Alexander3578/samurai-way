import React, {ChangeEvent} from 'react';
import {Post, PostPropsType} from './post/Post';
import s from './MyPosts.module.css'
import {ActionType, addPostAC, onChangeNewPostAC} from '../../../redux/state';

type MyPostsPropsType = {
    postData: PostPropsType[]
    dispatch: (action: ActionType) => void
    newPostText: string
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    const {postData, dispatch, newPostText} = props

    // const newPost = useRef<HTMLTextAreaElement>(null);

    const addPostHandler = (): void => {
            dispatch(addPostAC());
    }

    const onPostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(onChangeNewPostAC(e.currentTarget.value));
    }


    const postItems = postData.map((item: PostPropsType) => <Post key={item.id}
                                                                  postName={item.postName}
                                                                  id={item.id}
                                                                  likesCount={item.likesCount}/>)
    return (
        <div className={s.postBlock}>
            <h3>My Posts</h3>
            <div>
                <textarea value={newPostText} onChange={onPostChangeHandler}></textarea>
                <div>
                    <button onClick={addPostHandler}>Add Post</button>
                </div>

            </div>
            <div className={s.posts}>
                {
                    postItems
                }
            </div>
        </div>
    );
};

