import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import AboutPage from './AboutPage';
import SellPage from './SellPage'; // Skapa en komponent för "Börja sälja" sidan
import ContactPage from './ContactPage'; // Skapa en komponent för "Kontakt" sidan
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/sell" element={<SellPage />} /> {/* Skapa en väg för "Börja sälja" sidan */}
          <Route path="/contact" element={<ContactPage />} /> {/* Skapa en väg för "Kontakt" sidan */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;