import React from 'react';
import s from './ProfileInfo.module.css';

export const ProfileInfo:React.FC = () => {
    return (
        <div>
            <div className={s.contentImg}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Best_Nature_Picture_of_the_day.jpg" alt={'view'}/>
            </div>
            <div className={s.descriptionBlock}>
                ava + decrip
            </div>
        </div>
    );
};

