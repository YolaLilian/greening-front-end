import React from 'react';
import Navbar from './components/navigation/Navbar';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import HeroImage from './components/HeroImage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <HeroImage />
    </BrowserRouter>
  );
}

export default App;
