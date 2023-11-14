import {Post} from './Post';
import {Meta} from '@storybook/react';
import s from './Post.module.css';
import React from 'react';


const meta:Meta<typeof Post> = {
    component: Post
}

export default meta;

export const LikeCount = () => {
    return <span>likesCount</span>
}

export const Avatar = () => {
    return <img src={'https://i.pinimg.com/originals/10/ad/ab/10adabc386ba646f7df5f4e4d3156272.jpg'} alt='ava'/>
}

export const Name = () => {
    return <div className={s.item}>postName</div>
}

export const PostDemo = () => {
    return <div key={2} className={s.item}>
        <img src={'https://i.pinimg.com/originals/10/ad/ab/10adabc386ba646f7df5f4e4d3156272.jpg'} alt='ava'/>
        postName
        <div>
            <span>likesCount</span>
        </div>
    </div>
}