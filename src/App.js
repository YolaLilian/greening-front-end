import React from 'react';
import Navbar from './components/navigation/Navbar';
import HeroImage from './components/pages/Homepage/HeroImage';
import AboutUs from './components/pages/Homepage/aboutUs/AboutUs';
import Footer from './components/footer/Footer';
import Cardlink from './components/pages/Homepage/CardLink';
import BrainstormCard from './components/pages/Homepage/BrainstormCard';
import { BrowserRouter, Route } from 'react-router-dom';
import Ideas from './components/pages/Ideas';
import Idea from './components/pages/Idea';
import TipsTricks from './components/pages/TipsTricks';
import CreateIdea from './components/pages/CreateIdea'; 
import './App.css';
import Form from './components/Form';

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
          {/* <Form /> */}
          <Footer />
        </React.Fragment>
      )} />

      <Route path="/ideas/create" component={CreateIdea} />
      
      <Route path="/ideas" component={Ideas} />

      <Route exact path="/ideas/:id" component={Idea} />

      <Route path="/tips-and-tricks" component={TipsTricks} />
    </BrowserRouter>
  );
}

export default App;
