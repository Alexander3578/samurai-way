import React from 'react';
import {Post, PostPropsType} from './post/Post';
import s from './MyPosts.module.css'

export const MyPosts: React.FC = () => {

    const postData:Array<PostPropsType> = [
        {id: 1, postName: 'OOOOO', likesCount: 5},
        {id: 2, postName: 'PPPPP', likesCount: 333},
        {id: 3, postName: 'EEEEE', likesCount: 22},
        {id: 4, postName: 'ХХХХХ', likesCount: 3}
    ]

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

