import React from 'react';
import Navbar from './components/navigation/Navbar';
import HeroImage from './components/HeroImage';
import AboutUs from './components/aboutUs/AboutUs';
import Footer from './components/footer/Footer';
// import Cardlink from './components/CardLink';
import BrainstormCard from './components/BrainstormCard';
import CreateIdea from './components/pages/CreateIdea';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Form from './components/Form';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" render={props => (
        <React.Fragment>
          <Navbar />
          <HeroImage />
          {/* <Cardlink /> */}
          <AboutUs />
          <BrainstormCard />
          <Form />
          <Footer />
        </React.Fragment>
      )} />
      <Route path="/ideas/create" component={CreateIdea} />

    </BrowserRouter>
  );
}

export default App;
