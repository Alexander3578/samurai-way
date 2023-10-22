import React from 'react';
import {Post} from './post/Post';
import s from './MyPosts.module.css'

export const MyPosts: React.FC = () => {

    const postData = [
        {id: 1, postName: 'OOOOO', likesCount: 5},
        {id: 2, postName: 'PPPPP', likesCount: 333},
        {id: 3, postName: 'EEEEE', likesCount: 22},
        {id: 4, postName: 'ХХХХХ', likesCount: 3}
    ]

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
                <Post postName={'AAAAA'}/>
                <Post postName={'PPPPP'}/>
                <Post postName={'OOOOO'}/>
                <Post postName={'EEEEE'}/>
            </div>
        </div>
    );
};

