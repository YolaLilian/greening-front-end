import React from 'react';
import Navbar from './components/navigation/Navbar';
import HeroImage from './components/pages/Homepage/HeroImage';
import AboutUs from './components/pages/Homepage/aboutUs/AboutUs';
import Footer from './components/footer/Footer';
import Cardlink from './components/pages/Homepage/CardLink';
import BrainstormCard from './components/pages/Homepage/BrainstormCard';
import { BrowserRouter, Route } from 'react-router-dom';
import Ideas from './components/pages/Ideas'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" render={props => (
        <React.Fragment>
          <Navbar />
          <HeroImage />
          <Cardlink />
          <AboutUs />
          <BrainstormCard />
          <Footer />
        </React.Fragment>
      )} />

      <Route path="/ideas" component={Ideas} />


    </BrowserRouter>
  );
}

export default App;
