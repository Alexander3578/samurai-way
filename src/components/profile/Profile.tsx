import React from 'react';
import s from './Profile.module.css';
import MyPosts from './myPosts/MyPosts';

const Profile:React.FC = () => {
    return (
        <div className={s.content}>
            <div className={s.contentImg}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Best_Nature_Picture_of_the_day.jpg"/>
            </div>
            <div className=" ">
                ava + decrip
            </div>
            <MyPosts/>
        </div>
    );
};

export default Profile;