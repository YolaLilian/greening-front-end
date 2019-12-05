import React from 'react';
import Navbar from './components/navigation/Navbar';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
<<<<<<< HEAD
import HeroImage from './components/HeroImage';
import Cardlink from './components/cardlink';
import BrainstormCard from './components/BrainstormCard';
=======
import HeroImage from './components/hero/HeroImage';
>>>>>>> 8db345c885a4b2633240b8bacb83c2df617e3a2f

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <HeroImage />
      <Cardlink />
      <BrainstormCard />
    </BrowserRouter>
  );
}

export default App;
