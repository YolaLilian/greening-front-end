import React, { useEffect, useState } from "react";
import cardlink from "../../../images/cardlink_bg.jpg";
import { Link } from "react-router-dom";

const container = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignitems: "center",
    flexWrap: "wrap",
    margin: "150px 150px"
};

const cardlinkStyle = {
    backgroundImage: `url(${cardlink})`,
    backgroundSize: "cover",
    height: "225px",
    width: "175px",
    alignSelf: "center",
    padding: "30px",
    margin: "40px",
    margintop: "50px",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
};

const IdeasCards = () => {
    const [ideas, setIdeas] = useState([]);

    useEffect(() => {
        fetch("http://greening.louis.lol/api/ideas")
            .then(response => response.json())
            .then(data => setIdeas(data));
    }, []);

    return (
        <div className="App">
            <div style={container}>
                {ideas.map(idea => (
                    <div className="cardlink" style={cardlinkStyle}>
                        <Link to={`/ideas/${idea.id}`}>{idea.title}</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IdeasCards;
