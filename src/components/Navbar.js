import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>DIGITAL PORTFOLIO MAKER</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/create">Create Portfolio</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
