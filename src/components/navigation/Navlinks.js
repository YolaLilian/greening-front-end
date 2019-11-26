import React from 'react';
import { Link } from 'react-router-dom';

const Navlinks = () => {
    return (
        <ul className="nav-links">
            <li>
                <Link to="/" className="link">Brainstormen</Link>
            </li>
            <li>
                <Link to="/" className="link">Ideeën</Link>
            </li>
            <li>
                <Link to="/" className="link">Bijeenkomsten</Link>
            </li>
            <li>
                <Link to="/" className="link">Tips & Tricks</Link>
            </li>
            <li>
                <Link to="/" className="link">Inloggen of registreren</Link>
            </li>
            
        </ul>
    )
}

export default Navlinks;