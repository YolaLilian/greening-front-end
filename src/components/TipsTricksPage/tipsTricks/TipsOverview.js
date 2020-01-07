import React, { Component } from 'react';
import cardlink from '../../../images/cardlink_bg.jpg';
// import styled from 'styled-components';

class Ideas extends Component {
    constructor() {
        super()
        this.state = {
           title: "Greening",
    }
    console.log("Hallo ik ben er")
  }


  //Dit is je render wat getoond wordt.
  render() {
    const container = {
      height:"50vh",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignitems: "center",
      margin: "50px 0"
    }

    const cardlinkStyle = {
        backgroundImage:`url(${cardlink})`,
        backgroundSize: "cover",
        height:"250px",
        width: "200px",
        alignSelf: "center",
        padding: "30px",
        margin: "40px",
        margintop: "50px"
    }

    const h3_style = {
        color: "white",
        textAlign: "center",
        justifyContent: "center",
        display: "flex",
    }
    return (
      <div className="App">
          <div style={container}>
              <div className="cardlink" style={cardlinkStyle}>
                <h3 style={h3_style}>Strand opruimen</h3>
              </div>
              <div className="cardlink" style={cardlinkStyle}>
                <h3 style={h3_style}>Vuurwerkafval opvegen</h3>
              </div>
              <div className="cardlink" style={cardlinkStyle}>
                <h3 style={h3_style}>Bomen planten in het Kralingse Bos</h3>
              </div>
              <div className="cardlink" style={cardlinkStyle}>
                <h3 style={h3_style}>Troep opvissen uit de rivier</h3>
              </div>
          </div>
      </div>
    );
  }
}

export default Ideas;