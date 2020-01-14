import React, { Component } from "react";
import image from "../../../images/brainstorm.jpg"; // Use this image
import gradient from "../../../images/gradient_2.jpg"; // Use this image
import bgImage from "../../../images/Rectangle2.png";
import { Link } from "react-router-dom";
import "../../../../src/App.css";

const header = {
    width: "60%",
    flexDirection: "column",
    color: "white",
    fontFamily: "Bungee",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    lineHeight: "50px"
};

const flatText = {
    fontFamily: "Open Sans",
    lineHeight: "30px"
};

const container = {
    height: "580px",
    width: "1233px",
    justifyContent: "center",
    alignSelf: "center",
    flexDirection: "row",
    display: "flex"
};

const gradientImage = {
    height: "580px",
    width: "50%",
    float: "right",
    display: "flex",
    justifyContent: "center",
    backgroundImage: `url(${gradient})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
};

const brainstormImage = {
    height: "580px",
    width: "50%",
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
};

class BrainstormCard extends Component {
    constructor() {
        super();
        this.state = {
            items: []
        };
    }

    loadData() {
        // console.log("Load data")
    }

    render() {
        const bg = {
            height: "90vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            backgroundsize: "cover",
            backgroundImage: `url(${bgImage})`
        };

        return (
            <div className="App">
                <div style={bg}>
                    <div className="container" style={container}>
                        <div className="image" style={brainstormImage}></div>
                        <div className="gradient" style={gradientImage}>
                            <div className="text" style={header}>
                                <h1>Creeër een brainstormsessie</h1>
                                <button className="button" onClick={<Link to="/ideas/create"></Link>}>
                                    <Link to="/ideas/create" className="link">
                                        Maak een idee aan
                                    </Link>
                                </button>
                                <p style={flatText}>en begin een nieuw revolutionair idee om de wereld wat groener te maken!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BrainstormCard;
