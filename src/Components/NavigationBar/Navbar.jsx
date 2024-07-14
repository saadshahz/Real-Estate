// import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/svg/Logo.jsx'
import './style.css'

export default function Navbar() {

    const activeStyle = {
        backgroundColor: 'rgba(20, 20, 20, 1)',
        border: '1px solid rgba(38, 38, 38, 1)',
        color: 'white',
        padding: '8px 16px',
        borderRadius: '7px',
    };

    const inactiveStyle = {
        border: '1px solid transparent',
        padding: '8px 16px',
        color: 'white',
    };

    return (
        <>
            <header className="nav-bar text-white px-4 py-2 flex justify-between items-center" style={{ backgroundColor: 'rgba(38, 38, 38, 1)' }}>
                <div className="logo-section w-1/4 h-full flex justify-center items-center">
                    <Logo />
                </div>
                <div className="facility-section w-2/4 h-full flex justify-center">
                    <nav className="w-3/4 h-full flex justify-evenly items-center">
                        <NavLink to="/"
                            style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
                            className={({ isActive }) => (isActive ? 'text-gray-400' : 'text-white')}>Home</NavLink>
                        <NavLink to="/about"
                            style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
                            className={({ isActive }) => (isActive ? 'text-gray-400' : 'text-white')}>About Us</NavLink>
                        <NavLink to="/properties"
                            style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
                            className={({ isActive }) => (isActive ? 'text-gray-400' : 'text-white')}>Properties</NavLink>
                        <NavLink to="/service"
                            style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
                            className={({ isActive }) => (isActive ? 'text-gray-400' : 'text-white')}
                        >Services</NavLink>
                    </nav>
                </div>
                <div className="button-section w-1/4 h-full flex justify-center items-center">
                    <button className="button text-white py-2 px-4 rounded-md focus:outline-none" style={{ backgroundColor: 'rgba(20, 20, 20, 1)', border: '1px solid rgba(38, 38, 38, 1)', borderRadius: '7px' }}>Contact Us</button>
                </div>
            </header>
        </>
    )
}   
