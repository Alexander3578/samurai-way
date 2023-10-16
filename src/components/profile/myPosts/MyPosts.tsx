import React from 'react';
import {Post} from './post/Post';

export const MyPosts:React.FC = () => {
    return (
            <div>
                My Posts
                <div>
                    <textarea></textarea>
                    <button>Add Post</button>
                </div>
                <div>
                    <Post postName={'AAAAA'}/>
                    <Post postName={'PPPPP'}/>
                    <Post postName={'OOOOO'}/>
                    <Post postName={'EEEEE'}/>
                </div>
            </div>
    );
};

