import React from 'react';
import Navbar from './components/navigation/Navbar';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import HeroImage from './components/HeroImage';
import Cardlink from './components/cardlink';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <HeroImage />
      <Cardlink />
    </BrowserRouter>
  );
}

export default App;
