import React from 'react';
import s from './Header.module.css';

const Header:React.FC = () => {
    return (
        <header className={s.header}>
            <img
                src={'https://e7.pngegg.com/pngimages/669/698/png-clipart-marvel-avengers-logo-ultron-iron-man-youtube-captain-america-black-panther-hero-infinity-logo-marvel-avengers-assemble-fictional-characters.png'}/>
        </header>
    );
};

export default Header;