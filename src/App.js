import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer'
import AboutPage from './AboutPage';
import SellPage from './SellPage'; // Skapa en komponent för "Börja sälja" sidan
import ContactPage from './ContactPage'; // Skapa en komponent för "Kontakt" sidan
import Home from './Home';
import MinaSidor from './login';
import ProductPage from './ProductPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<MinaSidor/>} />
          <Route path="/sell" element={<SellPage />} /> 
          <Route path="/contact" element={<ContactPage />} /> 
          <Route path="/products" element={<ProductPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;