import React, {Component} from 'react';
import cardlink from '../images/cardlink_bg.jpg'; // Use this image
import icon_1 from '../images/brain.svg';
import icon_2 from '../images/idea.svg';
import icon_3 from '../images/united.svg';
import icon_4 from '../images/magic-hat.svg';
import '../App.css';

class Cardlink extends Component {
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
      margin: "50px 0",
      // border: "3px solid red",
    }

    const cardlinkStyle = {
        backgroundImage:`url(${cardlink})`,
        backgroundSize: "cover",
        height:"150px",
        width: "100px",
        alignSelf: "center",
        padding: "30px",
        margin: "40px",
        margintop: "50px",
        // border: "2px solid blue",
        // cursor: "pointer"
    }

    const h3_style = {
        color: "white",
        textAlign: "center"
    }
    return (
      <div className="App">
          <div style={container}>
              <div className="cardlink" style={cardlinkStyle}>
                <img src={icon_1} />
                <h3 style={h3_style}>Brainstormen</h3>
              </div>
              <div className="cardlink" style={cardlinkStyle}>
                <img src={icon_2} />
                <h3 style={h3_style}>Ideeen</h3>
              </div>
              <div className="cardlink" style={cardlinkStyle}>
                <img src={icon_3} />
                <h3 style={h3_style}>Bijeenkomst</h3>
              </div>
              <div className="cardlink" style={cardlinkStyle}>
                <img src={icon_4} />
                <h3 style={h3_style}>Tips and tricks</h3>
              </div>
          </div>
      </div>
    );
  }
}


export default Cardlink;
