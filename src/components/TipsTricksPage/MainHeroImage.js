import React from 'react';
import styled from 'styled-components';
import heroImage from '../../images/gradient_2.jpg';
import { Link } from 'react-router-dom';
// import showIdeasHeroContent from './showIdeasHeroContent'

const OurMainHeroImage = styled.p`
    background-image: url(${heroImage});
    height:100vh;
    z-index: 5;
    background-size: cover;
    background-position: center;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    
    h1 {
        margin: 0;
        text-align: center;
        color: white;
        font-family: Bungee;
        font-size: 50px;
    }
`;


const OurheroImage = () => {
    return (
        <OurMainHeroImage>
            <div className="heroContent">
                <h1>Tips and Tricks</h1>
            </div>
        </OurMainHeroImage>
    );
};

export default OurheroImage;