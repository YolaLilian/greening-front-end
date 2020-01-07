import React from 'react';
import Navbar from './components/navigation/Navbar';
import HeroImage from './components/pages/Homepage/HeroImage';
import AboutUs from './components/pages/Homepage/aboutUs/AboutUs';
import Footer from './components/footer/Footer';
<<<<<<< HEAD
// import Cardlink from './components/CardLink';
import BrainstormCard from './components/BrainstormCard';
import CreateIdea from './components/pages/CreateIdea';
import { BrowserRouter, Route } from 'react-router-dom';
=======
import Cardlink from './components/pages/Homepage/CardLink';
import BrainstormCard from './components/pages/Homepage/BrainstormCard';
import { BrowserRouter, Route } from 'react-router-dom';
import Ideas from './components/pages/Ideas';
import TipsTricks from './components/pages/TipsTricks';
>>>>>>> 1f8e804deedd2dab44f47025cb7514072b41524f
import './App.css';
import Form from './components/Form';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" render={props => (
        <React.Fragment>
          <Navbar />
          <HeroImage />
<<<<<<< HEAD
          {/* <Cardlink /> */}
          <AboutUs />
          <BrainstormCard />
          <Form />
          <Footer />
        </React.Fragment>
      )} />
      <Route path="/ideas/create" component={CreateIdea} />

=======
          <Cardlink />
          <AboutUs />
          <BrainstormCard />
          <Footer />
        </React.Fragment>
      )} />

      <Route path="/ideas" component={Ideas} />

      <Route path="/tips-and-tricks" component={TipsTricks} />
>>>>>>> 1f8e804deedd2dab44f47025cb7514072b41524f
    </BrowserRouter>
  );
}

export default App;
