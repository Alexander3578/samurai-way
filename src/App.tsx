import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Navber from './components/Navber';
import Profile from './components/profile/Profile';

const App: React.FC = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navber/>
            <Profile/>
        </div>
    );
}

export default App;
