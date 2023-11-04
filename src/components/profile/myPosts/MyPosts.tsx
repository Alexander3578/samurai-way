import React from 'react';
import {Post, PostPropsType} from './post/Post';
import s from './MyPosts.module.css'

type MyPostsPropsType = {
    postData: PostPropsType[]
}

export const MyPosts: React.FC<MyPostsPropsType> = ({postData}) => {

    const postItems = postData.map((item:PostPropsType) => <Post postName={item.postName}
                                                                 id={item.id}
                                                                 likesCount={item.likesCount}/>)
    return (
        <div className={s.postBlock}>
            <h3>My Posts</h3>
            <div>
                <textarea></textarea>
                <div>
                    <button>Add Post</button>
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

