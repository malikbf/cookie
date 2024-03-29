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
import AdminPage from './AdminPage';
import MasterLogin from './MasterLogin';
import AdminHome from './AdminHome';
import CheckoutForm from './Checkout';
import Return from './CheckoutReturn';

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
          <Route path="/master" element={<MasterLogin />}></Route> 
          <Route path="/home-master" element={<AdminPage />}></Route>
          <Route path="/admin" element={<AdminHome />}></Route> 
          <Route path="/contact" element={<ContactPage />} /> 
          <Route path="/products" element={<ProductPage />} />
          <Route path="/checkout" element={<CheckoutForm />} />
          <Route path="/return" element={<Return />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;