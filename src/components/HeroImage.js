import React, {Component} from 'react';
import logo from '../heroImage.jpg'; // Use this image
import '../App.css';

class HeroImage extends Component {
  constructor() {
    super()
    this.state = {
      title: "Greening",
      
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
    const style = {
      color: "white",
      position: "relative",
      marginTop: "-50%",
      fontFamily: "Bungee"
    };
    return (
      <div className="App">
        <img src={logo} height="100%" width="100%"/>
          <h1 style={style}>{this.state.title}</h1>
        <button className="button" onClick={ () => this.loadData() }>Deel jouw idee</button>
      </div>
    );
  }
}


export default HeroImage;
