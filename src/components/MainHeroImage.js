import React from 'react';
import styled from 'styled-components';
import heroImage from '../images/gradient_2.jpg';
import showIdeasHeroContent from './ShowIdeasPage/showIdeasHeroContent'

const OurMainHeroImage = styled.p`
    background-image: url(${heroImage});
    height:100vh;
    z-index: 5;
    background-size: cover;
    background-position: center;
    margin: 0;
`;


const OurheroImage = () => {
    return (
        <OurMainHeroImage>
            <showIdeasHeroContent />
        </OurMainHeroImage>
    )
}

export default OurheroImage;