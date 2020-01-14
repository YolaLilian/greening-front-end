import React, {Component} from 'react';
import logo from '../../../images/heroImage.jpg';
import { Link } from 'react-router-dom';
import '../../../App.css';

class HeroImage extends Component {
  constructor() {
    super()
    this.state = {
      title: "Welkom bij Greening",
      
    }
    console.log("Hallo ik ben er")
  }
  loadData() {
    console.log("Load data")
    this.setState( {title: "Welkom bij Greening"})
  }

  // loadJSON() {

    //     fetch('./ideas.json')

    //         .then((response)
    //             => response.json())

    //         .then((data)
    //             =>
    //             this.dataWasLoaded(data))

    //         .catch((error)
    //             =>
    //             console.error('help'))

    // }



    // dataWasLoaded(json) {

    //    // this.setState({
    //     //
    //    //     ideas: json.ideas

    //   //  })

    //     console.log(json)

    // }

  render() {
    const header = {
      color: "white",
      fontFamily: "Bungee",
      alignSelf: "center",
      fontSize: "40px"
    };
    
    const bg = {
      height:"100vh",
      backgroundImage:`url(${logo})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }

    return (
      <div className="App">
          <div style={bg}>
            <h1 style={header}>{this.state.title}</h1>
            <button className="button" onClick={ () => this.loadData() }><Link to="/ideas/create" className="link">Deel jouw idee</Link></button>
          </div>
      </div>
    );
  }
}


export default HeroImage;
