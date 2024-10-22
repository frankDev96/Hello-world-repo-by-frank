import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <h1>Software Developer</h1>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Portfolio</li>
                    <li>Projects</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
