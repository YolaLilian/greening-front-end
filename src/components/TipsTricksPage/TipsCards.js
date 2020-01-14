import React, { useEffect, useState } from "react";
import cardlink from "../../images/cardlink_bg.jpg";
import { Link } from "react-router-dom";

const container = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignitems: "center",
    flexWrap: "wrap",
    margin: "150px 150px",
    
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

const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "28px",
    alignSelf: "center",
    textAlign: "center",
    // fontFamily: "Open Sans"
    
};

const IdeasCards = () => {
    const [tips, setTips] = useState([]);

    useEffect(() => {
        fetch("http://greening.louis.lol/api/tips-and-tricks")
            .then(response => response.json())
            .then(data => setTips(data));
    }, []);

    return (
        <div className="App">
            <div style={container}>
                {tips.map(tip => (
                    <div className="cardlink" style={cardlinkStyle}>
                        <Link style={linkStyle} to={`/tips-and-tricks/${tip.id}`}>{tip.title}</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IdeasCards;
