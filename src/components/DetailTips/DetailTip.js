import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";

const StyledIdeaDetail = styled.p`
    height: 70vh;
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
    }
`;

const IdeaDetail = () => {
    const [tip, setTip] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        console.log(id);
        fetch(`http://greening.louis.lol/api/tips-and-tricks/${id}`)
            .then(response => response.json())
            .then(data => setTip(data));
    }, []);

    return (
        <div className="App">
            <StyledIdeaDetail>
                <div>
                    <div id="detail">
                        <h2 id="detail">Naam idee</h2>
                        <p>{tip.title}</p>
                    </div>
                    <div id="detail">
                        <h2 id="detail">Mogelijke locatie idee</h2>
                        <p>{tip.subject}</p>
                    </div>
                    <div id="detail">
                        <h2 id="detail">Beschrijving idee</h2>
                        <p>{tip.description}</p>
                    </div>
                </div>
            </StyledIdeaDetail>
        </div>
    );
};

export default IdeaDetail;
