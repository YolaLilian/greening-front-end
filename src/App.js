import React from 'react';
import Navbar from './components/navigation/Navbar';
import HeroImage from './components/HeroImage';
import AboutUs from './components/aboutUs/AboutUs';
import Footer from './components/footer/Footer';
import Cardlink from './components/CardLink';
import BrainstormCard from './components/BrainstormCard';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <HeroImage />
      <Cardlink />
      <AboutUs />
      <BrainstormCard />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
