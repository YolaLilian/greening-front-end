import React from 'react';
import styled from 'styled-components';
import Navlinks from './Navlinks';
import Logo from '../../images/Logo1.png';



const MyDesktopNavbar = styled.nav`
    display: flex;
    flex-flow: row nowrap; 
    align-items: center;
    
    background : #EEEEEE;
    height: 10vh;

    .logo img {
        height: 6.5vh;
        margin-left: 70px;
    }

    .nav-links {
        display: flex;
        flex-flow: row nowrap; 
        justify-content: space-evenly;  
        align-items: center;
        margin-left: 850px;
        width: 43vw;

        list-style: none;
    }

    .link {
        color: #919191;
        font-size: 2vh;
        font-style: bold;
        text-decoration: none;
    }
`;

const DesktopNavbar = () => {
    return (
        <MyDesktopNavbar>
            <div className="logo">
                <img src={ Logo } alt="" />
            </div> 

            <Navlinks />
        </MyDesktopNavbar>
    );
};

export default DesktopNavbar;