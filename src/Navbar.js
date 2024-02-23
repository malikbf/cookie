import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 
import logo from './logo.png'; 

function Navbar() {
  return (
    <nav className="navbar">
      
      <ul className="nav-links">
      <img src={logo} alt="logo" className="logo" /> 
        <li><Link to="/">Startsida</Link></li>
        <li><Link to="/sell">Börja sälja</Link></li>
        <li><Link to="/login">Mina sidor</Link></li>
        <li><Link to="/about">Om oss</Link></li>
        <li><Link to="/contact">Kontakt</Link></li>
        
      </ul>
      
    </nav>
            
  );
  
}


export default Navbar;