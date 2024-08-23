import React, { useState } from 'react';
import './Navbar.css';
import MobileNav from './Mobile Navbar/MobileNav';

function Navbar() {

    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

            <nav className="nav-wrapper">
                <div className="nav-content">
                    <img src="./assets/images/logo.png" alt="Logo" className="logo" />

                    <ul>
                        <li><a href="#home" className="menu-item">Home</a></li>
                        <li><a href="#skills" className="menu-item">Skills</a></li>
                        <li><a href="#projects" className="menu-item">Projects</a></li>
                        <li><a href="#about" className="menu-item">About</a></li>
                        <li><a href="#contactme" className="menu-item">Contact Me</a></li>
                    </ul>

                </div>

                <a href="#!" onClick={(e) => { e.preventDefault(); toggleMenu(); }}>
                    <img src="./assets/images/menu.png" alt="Menu" className="menu-btn" />
                </a>
            </nav>
        </>
    );
}

export default Navbar;
