import React from 'react';
import Navbar from './components/navigation/Navbar';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import HeroImage from './components/HeroImage';
import BrainstormCard from './components/BrainstormCard';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <HeroImage />
      <BrainstormCard />
    </BrowserRouter>
  );
}

export default App;
