import React, {useRef} from 'react';
import {Post, PostPropsType} from './post/Post';
import s from './MyPosts.module.css'

type MyPostsPropsType = {
    postData: PostPropsType[]
    addPost: (postName: string) => void
}

export const MyPosts: React.FC<MyPostsPropsType> = ({postData, addPost}) => {

    const newPost = useRef<HTMLTextAreaElement>(null);

    const addPostHandler = ():void => {
        if(newPost.current)
            addPost(newPost.current.value)
    }

    const postItems = postData.map((item:PostPropsType) => <Post key = {item.id}
                                                                 postName={item.postName}
                                                                 id={item.id}
                                                                 likesCount={item.likesCount}/>)
    return (
        <div className={s.postBlock}>
            <h3>My Posts</h3>
            <div>
                <textarea ref={newPost}></textarea>
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

