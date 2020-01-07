import React, {Component} from 'react';
<<<<<<< HEAD:src/components/BrainstormCard.js
import image from '../images/brainstorm.jpg'; // Use this image
import gradient from '../images/gradient_2.jpg'; // Use this image
import bgImage from '../images/Rectangle2.png';
import '../App.css';
import axios from 'axios';

const header = {
  width: "60%",
  // height: "200px",
  flexDirection: "column",
  color: "white",
  fontFamily: "Bungee",
  display: "flex",
  justifyContent: "center",
  textAlign: "center",
  // border: "2px solid yellow",
  lineHeight: "50px"
};

const flatText = {
  fontFamily: "Open Sans",
  lineHeight: "30px"
}

const container = {
  height: "580px",
  width: "1233px",
  justifyContent: "center",
  alignSelf: "center",
  flexDirection: "row",
  display: "flex"
}

const gradientImage = {
  height: "580px",
  width: "50%",
  float: "right",
  display: "flex",
  justifyContent: "center",
  backgroundImage:`url(${gradient})`,
  backgroundSize: "cover",
  backgroundPosition: "center"
}

const brainstormImage = {
  height: "580px",
  width: "50%",
  backgroundImage:`url(${image})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
}

const bg = {
  height:"100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  // backgroundColor: "blue"
}
=======
import image from '../../../images/brainstorm.jpg'; // Use this image
import gradient from '../../../images/gradient_2.jpg'; // Use this image
import bgImage from '../../../images/Rectangle2.png';
import '../../../App.css';
>>>>>>> 1f8e804deedd2dab44f47025cb7514072b41524f:src/components/pages/Homepage/BrainstormCard.js

class BrainstormCard extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
      isLoaded: false,
    }
  }
  
  loadData() {
    console.log("Load data")
    this.setState( {title: "Welkom bij Greening"})
  }

<<<<<<< HEAD
  render() {
    
    // const background = {
    //   backgroundImage: `url(${bgImage})`
    // };

    const header = {
      width: "60%",
      flexDirection: "column",
      color: "white",
      fontFamily: "Bungee",
      display: "flex",
      justifyContent: "center",
      textAlign: "center",
      lineHeight: "50px",
    };

    const flatText = {
      fontFamily: "Open Sans",
      lineHeight: "30px"
    }

    const container = {
      height: "580px",
      width: "1233px",
      justifyContent: "center",
      alignSelf: "center",
      flexDirection: "row",
      display: "flex"
    }
=======
  componentDidMount() {
    fetch('http://greening.louis.lol/api/id')
      .then(response => response.json())
      .then(json => {
        console.log(json)
        this.setState({
          isLoaded: true,
          items: json,
        })
      })
      .catch(error => {
        console.log("aaargh")
        console.log(error)
      })
  }
>>>>>>> brainstormCard

  render() {

    var { isLoaded, items} = this.state;

<<<<<<< HEAD
    const bg = {
      height:"90vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      backgroundsize: "cover",
      backgroundImage: `url(${bgImage})`
    }

=======
    if(!isLoaded) {
      return <div>Loading...</div>;
    }
    
   
>>>>>>> brainstormCard
    return (
      <div className="App">
          <div style={bg}>
            <div className="container" style={container}>
              <div className="image" style={brainstormImage}></div>
              <div className="gradient" style={gradientImage}>
                <div className="text" style={header}>
                  <h1 >{this.state.title}</h1>
                <button className="button" onClick={ () => this.loadData() }>Create</button>
                  <p style={flatText}>en begin een nieuw revolutionair
                  idee om de wereld wat groener
                  te maken!</p>
                </div>
              </div>
            </div>
          </div>

      <h1>
        {items.map(item => (
            <li key={item.id}>
              {item.username}
            </li>
        ))};
      </h1>

      </div>
    );
  }
}

export default BrainstormCard;


