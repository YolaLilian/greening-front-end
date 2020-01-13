import React, { useEffect, useState } from "react";
import styled from "styled-components";
import heroImage from "../../images/gradient_2.jpg";
import { useParams } from "react-router";

const OurMainHeroImage = styled.p`
    background-image: url(${heroImage});
    height: 100vh;
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
    const [idea, setIdea] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        console.log(id);
        fetch(`http://greening.louis.lol/api/ideas/${id}`)
            .then(response => response.json())
            .then(data => setIdea(data));
    }, []);

    return (
        <OurMainHeroImage>
            <div className="heroContent">
                <h1>{idea.title}</h1>
            </div>
        </OurMainHeroImage>
    );
};

export default OurheroImage;
