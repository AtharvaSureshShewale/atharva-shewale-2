import React from 'react';
import './MobileNav.css';

function MobileNav({ isOpen, toggleMenu }) {
    return (
        <>
            <div className={`mobile-menu ${isOpen ? "active" : ""}`}>
                <div className="mobile-menu-container">
                    <img src="./assets/images/logo.png" alt="logo" className="logo" />

                    <button className="close-btn" onClick={toggleMenu}>
                        <img src="./assets/images/close.png" alt="Close" />
                    </button>

                    <ul>
                        <li><a href="#home" className="menu-item">Home</a></li>
                        <li><a href="#skills" className="menu-item">Skills</a></li>
                        <li><a href="#projects" className="menu-item">Projects</a></li>
                        <li><a href="#about" className="menu-item">About</a></li>
                        <li><a href="#contactme" className="menu-item">Contact Me</a></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default MobileNav;
