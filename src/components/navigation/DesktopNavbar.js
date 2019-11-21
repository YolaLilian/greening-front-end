import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from '../../images/Logo1.png';

const MyDesktopNavbar = styled.nav`
    display: flex;
    flex-flow: row nowrap; 
    justify-content: space-evenly;  
    align-items: center;

    background :red;
    color: white;

    height: 15vh;

    .logo img {
        height: 10vh; 
        font-size: 7vh;
        font-weight: bold;
        text-shadow: 3px 3px 3px black;
    }

    .nav-links {
        display: flex;
        flex-flow: row nowrap; 
        justify-content: space-evenly;  
        align-items: center;

        width: 35vw;

        list-style: none;
    }

    .link {
        color: white;
        font-size: 1.5vh;
        text-decoration: none;
    }
`;

const DesktopNavbar = () => {
    return (
        <MyDesktopNavbar>
           <div className="logo">
           <img src={ Logo } />
            </div> 

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
                   <Link to="/" className="link">Inloggen</Link>
               </li>
               <li>
                   <Link to="/" className="link">Registreren</Link>
               </li>
           </ul>

        </MyDesktopNavbar>
    );
};

export default DesktopNavbar;