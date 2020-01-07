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
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      alignitems: "center",
      flexWrap: "wrap",
      margin: "150px 150px",
    }
    
    const cardlinkStyle = {
      backgroundImage:`url(${cardlink})`,
      backgroundSize: "cover",
      height:"225px",
      width: "175px",
      alignSelf: "center",
      padding: "30px",
      margin: "40px",
      margintop: "50px",
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
    }
    
    const h3_style = {
      color: "white",
      fontSize: "20px",
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