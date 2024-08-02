// import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './style.css'

// import Cancel from './svg/Cancel'
import Logo from '../../assets/svg/Logo.jsx'
import MenuBar from './svg/Menu.jsx';
import MainMenuClose from './svg/MainMenuClose.jsx';

export default function Navbar() {

    const [sidebarVisible, setSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setSidebarVisible(prev => !prev);
    };

    const activeStyle = {
        backgroundColor: 'rgba(20, 20, 20, 1)',
        border: '1px solid rgba(38, 38, 38, 1)',
    };

    const inactiveStyle = {
        border: '1px solid transparent',
    };

    return (
        <>
            {/* <header className="banner">
                <p>✨Discover Your Dream Property with Estatein <span>Learn More</span></p>
                <Cancel className="cancel-button" />
            </header> */}

            <nav className='header'>
                <div className='logo-section'>
                    <Logo />
                </div>
                <div className="facility-section">
                    <NavLink to="/"
                        style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
                        className="links"
                    >Home</NavLink>
                    <NavLink to="/about"
                        style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
                        className="links"
                    >About Us</NavLink>
                    <NavLink to="/properties"
                        style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
                        className="links"
                    >Properties</NavLink>
                    <NavLink to="/service"
                        style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
                        className="links"
                    >Services</NavLink>
                </div>
                <div className='menu-icon' onClick={toggleSidebar}>
                    <MenuBar />
                </div>
                <div className={`sidebar ${sidebarVisible ? 'visible' : 'hidden'}`}>
                    <div className='menu-close-icon' onClick={toggleSidebar}>
                        <MainMenuClose />
                    </div>
                    <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)} className="links">Home</NavLink>
                    <NavLink to="/about" style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)} className="links">About Us</NavLink>
                    <NavLink to="/properties" style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)} className="links">Properties</NavLink>
                    <NavLink to="/service" style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)} className="links">Services</NavLink>
                    <NavLink to="/contact" style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)} className="links">Contact Us</NavLink>
                </div>
                <div className='button-section'>
                    <NavLink to='/contact' className="contact-button">Contact Us</NavLink>
                </div>
            </nav>

        </>
    )
}
