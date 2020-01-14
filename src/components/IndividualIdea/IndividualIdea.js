import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";

const StyledIdeaDetail = styled.p`
    min-height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;

    #detail h2 {
        color: #3ba755;
        font-size: 30px;
    }

    #detail p {
        background-color: #eeeeee;
        font-size: 20px;
        max-width:65vw; 
        padding: 10px;
    }
`;

const IdeaDetail = () => {
    const [idea, setIdea] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        console.log(id);
        fetch(`http://greening.louis.lol/api/ideas/${id}`)
            .then(response => response.json())
            .then(data => setIdea(data));
    }, []);

    return (
        <div className="App">
            <StyledIdeaDetail>
                <div>
                    <div id="detail">
                        <h2 id="detail">Naam idee</h2>
                        <p>{idea.title}</p>
                    </div>
                    <div id="detail">
                        <h2 id="detail">Onderwerp</h2>
                        <p>{idea.subject}</p>
                    </div>
                    <div id="detail">
                        <h2 id="detail">Beschrijving idee</h2>
                        <p>{idea.description}</p>
                    </div>
                </div>
            </StyledIdeaDetail>
        </div>
    );
};

export default IdeaDetail;
