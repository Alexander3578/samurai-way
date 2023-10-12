import React from 'react';
import s from './Post.module.css';

const Post: React.FC = () => {
    return (
        <div className={s.item}>
            <img src={'https://i.pinimg.com/originals/10/ad/ab/10adabc386ba646f7df5f4e4d3156272.jpg'}/>
            post1
            <div>
                <span>Like</span>
            </div>
        </div>
    );
};

export default Post;