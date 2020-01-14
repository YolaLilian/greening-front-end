import React from 'react';
import Navbar from './components/navigation/Navbar';
import HeroImage from './components/pages/Homepage/HeroImage';
import AboutUs from './components/pages/Homepage/aboutUs/AboutUs';
import Footer from './components/footer/Footer';
import Cardlink from './components/pages/Homepage/CardLink';
import BrainstormCard from './components/pages/Homepage/BrainstormCard';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Ideas from './components/pages/Ideas';
import Idea from './components/pages/Idea';
import TipsTricks from './components/pages/TipsTricks';
import Tip from './components/pages/Tip';
import CreateIdea from './components/pages/CreateIdea'; 
import './App.css';
// import Form from './components/Form';

function App() {
  return (
    <BrowserRouter>
    <Switch>
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

      {/* <Route exact path="/ideas/create" component={CreateIdea} /> */}
      <Route exact path="/ideas/create" render={props => (
        <React.Fragment>
          <CreateIdea />
        </React.Fragment>
        
      )} />
      
      <Route exact path="/ideas" component={Ideas} />

      <Route exact path="/ideas/:id" component={Idea} />

      <Route exact path="/tips-and-tricks" component={TipsTricks} />

      <Route exact path="/tips-and-tricks/:id" component={Tip} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
