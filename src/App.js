import React from 'react';
import Navbar from './components/navigation/Navbar';
import HeroImage from './components/hero/HeroImage';
import Footer from './components/footer/Footer';
import Cardlink from './components/cardlink';
import BrainstormCard from './components/BrainstormCard';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <HeroImage />
      <Cardlink />
      <BrainstormCard />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
