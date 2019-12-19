import React from 'react';
import Navbar from './components/navigation/Navbar';
// import HeroImage from './components/Homepage/HeroImage';
// import AboutUs from './components/Homepage/aboutUs/AboutUs';
import Footer from './components/footer/Footer';
// import Cardlink from './components/Homepage/CardLink';
// import BrainstormCard from './components/Homepage/BrainstormCard';
import MainHeroImage from './components/MainHeroImage';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <MainHeroImage />
      {/* <HeroImage />
      <Cardlink />
      <AboutUs />
      <BrainstormCard /> */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
