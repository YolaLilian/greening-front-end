import React from 'react';
import styled from 'styled-components';
import Logo from '../../images/logo_white.png';
import SocialMediaLinks from './SocialMediaLinks';


const MyDesktopFooter = styled.footer`
   background: #45CB85; 
   height: 10vh;
   z-index:10;
   display: flex;
   align-items: center;
   width: 100%;

    .logo img {
        height: 6.5vh;
        margin-left: 6.5vw;
    }

    .sm-links {
        width: 180px;
        display: flex;
        flex-flow: row; 
        align-items: center;
        justify-content: space-between;
        margin-left: 69vw;
        list-style: none;
    }
    
    .sm-links img {
        width: 45px;
        list-style: none;
        position: relative;
    }

`;

const DesktopFooter = () => {
    return (
        <MyDesktopFooter>
            <div className="logo">
                <img src={ Logo } alt="" /> 
            </div> 
            <SocialMediaLinks />
        </MyDesktopFooter>
    );
};

export default DesktopFooter;