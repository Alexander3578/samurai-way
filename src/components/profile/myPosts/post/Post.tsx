import React from 'react';
import s from './Post.module.css';

type PostPropsType = {
    postName: string
}

export const Post: React.FC<PostPropsType> = (props) => {
    return (
        <div className={s.item}>
            <img src={'https://i.pinimg.com/originals/10/ad/ab/10adabc386ba646f7df5f4e4d3156272.jpg'} alt='ava'/>
            {props.postName}
            <div>
                <span>Like</span>
            </div>
        </div>
    );
};

