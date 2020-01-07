import React, { Component } from 'react';
import cardlink from '../../../images/cardlink_bg.jpg';
import IdeasCards from './IdeasCards';
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
    return (
      <div className="App">
          <IdeasCards />
      </div>
    );
  }
  }


export default Ideas;