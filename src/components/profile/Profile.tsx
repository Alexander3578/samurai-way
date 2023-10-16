import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from './myPosts/MyPosts';

export const Profile:React.FC = () => {
    return (
        <div>
            <div className={s.contentImg}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Best_Nature_Picture_of_the_day.jpg" alt={'view'}/>
            </div>
            <div>
                ava + decrip
            </div>
            <MyPosts/>
        </div>
    );
};

