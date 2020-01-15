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

    .button a {
        text-decoration: none;
        color: white;
        font-family: "Open Sans";
    }
    
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
                <h1>Ideeën</h1>
                <button className="button" onClick={ <Link to="/ideas/create"></Link>}>
                    <Link to="/ideas/create" className="link">Maak een idee aan</Link>
                </button>
            </div>
        </OurMainHeroImage>
    );
};

export default OurheroImage;