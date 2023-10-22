import React from 'react';
import s from './Post.module.css';

export type PostPropsType = {
    postName: string
    id: number
    likesCount: number
}

export const Post: React.FC<PostPropsType> = (props) => {

    const {postName, likesCount, id} = props

    return (
        <div key={id} className={s.item}>
            <img src={'https://i.pinimg.com/originals/10/ad/ab/10adabc386ba646f7df5f4e4d3156272.jpg'} alt='ava'/>
            {postName}
            <div>
                <span>{likesCount}</span>
            </div>
        </div>
    );
};

