import React, { Component } from "react";
import cardlink from "../../../images/cardlink_bg.jpg";
import icon_1 from "../../../images/brain.svg";
import icon_2 from "../../../images/idea.svg";
import icon_3 from "../../../images/united2.svg";
import icon_4 from "../../../images/magic-hat.svg";
import { Link } from "react-router-dom";
import "../../../App.css";

class Cardlink extends Component {
    constructor() {
        super();
        this.state = {
            title: "Greening"
        };
        console.log("Hallo ik ben er");
    }

    render() {
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
            justifyContent: "center"
        };

        const imageStyle = {
            height: "170px",
            width: "120px"
        };

        const h3_style = {
            color: "white",
            fontSize: "20px"
        };

        const linkStyle = {
            textDecoration: "none",
            justifyContent: "center"
        };

        const h3_extra_style = {
         marginLeft: "10px",
         paddingLeft: "20px",
         color: "white",
         fontSize: "20px"
      };

        return (
            <div className="App">
                <div style={container}>
                    <div className="cardlink" style={cardlinkStyle}>
                        <a href="greening.louis.lol/tips-and-tricks" style={linkStyle}>
                            <img style={imageStyle} src={icon_1} alt="" />
                            <h3 style={h3_style}>Brainstorm</h3>
                        </a>
                    </div>
                    <div className="cardlink" style={cardlinkStyle}>
                        <a href="greening.louis.lol/tips-and-tricks" style={linkStyle}>
                            <img style={imageStyle} src={icon_2} alt="" />
                            <h3 style={h3_extra_style}>Idee&euml;n</h3>
                        </a>
                    </div>
                    <div className="cardlink" style={cardlinkStyle}>
                        <a href="greening.louis.lol/tips-and-tricks" style={linkStyle}>
                            <img style={imageStyle} src={icon_3} alt="" />
                            <h3 style={h3_style}>Bijeenkomsten</h3>
                        </a>
                    </div>
                    <div className="cardlink" style={cardlinkStyle}>
                        <a href="greening.louis.lol/tips-and-tricks" style={linkStyle}>
                            <img style={imageStyle} src={icon_4} alt="" />
                            <h3 style={h3_style}>Tips and tricks</h3>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cardlink;
