/* Navbar.jsx */

import React from 'react';
import './Navbar.css';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <Container>
            <header className="header">
                <NavLink to="">Create Account</NavLink>
                <NavLink to="">Log In</NavLink>
            </header>
            <nav className="navbar bg-body-tertiary" expand="lg">
                <div className="max-width">
                    <div className="logo">
                        <NavLink to="/">G-Cargo</NavLink>
                    </div>
                    <ul>
                        <li>
                            <NavLink to="/Home"> Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Services">Services</NavLink>
                        </li>
                        <li>
                            <NavLink to="/References">References</NavLink>
                        </li>
                        <li>
                            <NavLink to="/About Us">About Us</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Contact Us">Contact Us</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </Container>
    );
};

export default Navbar;
