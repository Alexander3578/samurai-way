import React from 'react';
import Post from './post/Post';

const MyPosts:React.FC = () => {
    return (
            <div>
                My Posts
                <div>
                    <textarea></textarea>
                    <button>Add Post</button>
                </div>
                <div>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                </div>
            </div>
    );
};

export default MyPosts;