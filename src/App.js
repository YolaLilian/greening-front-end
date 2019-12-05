import React from 'react';
import Navbar from './components/navigation/Navbar';
import HeroImage from './components/hero/HeroImage';
import Footer from './components/footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <HeroImage />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
