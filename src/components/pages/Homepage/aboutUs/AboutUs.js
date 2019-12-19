import React from 'react';
import styled from 'styled-components';
import bgImage from '../../../../images/Rectangle1.png';
import AboutUsContent from './AboutUsContent';

const OurAboutUs = styled.p`
    background-image: url(${bgImage}); 
    z-index: 5;
    background-size: cover;
    height: 100vh;
    margin: 0;
    

    .au-content {
        font-size: 20px;
        width: 50vw;
        padding: 170px;
        padding-top: 300px;
        color: #3BA755
    }
`;

const AboutUs = () => {
    return (
        <OurAboutUs>
            <AboutUsContent />
        </OurAboutUs>
    );
};

export default AboutUs;