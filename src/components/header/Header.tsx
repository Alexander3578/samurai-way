import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';
import {HeaderPropsType} from './HeaderContainer';

const Header: React.FC<HeaderPropsType> = (props) => {
    return (
        <header className={s.header}>
            <img
                src={'https://e7.pngegg.com/pngimages/669/698/png-clipart-marvel-avengers-logo-ultron-iron-man-youtube-captain-america-black-panther-hero-infinity-logo-marvel-avengers-assemble-fictional-characters.png'}
                alt="avatar"/>
            <div className={s.header_login}>
                {
                    props.isAuth
                        ? <div>
                            {props.login} -
                            <button onClick={props.logout}>Logout</button>
                        </div>
                        : <NavLink to={'/login'} className={s.header_login_link}>Login</NavLink>
                }
            </div>
        </header>
    );
};

export default Header;