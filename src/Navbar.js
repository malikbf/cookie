import React from 'react';
import './Navbar.css'; // Importera CSS-filen för att styla navbaren
import About from './About.js'; 

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="/">Startsida</a></li>
        <li><a href="/sell">Börja sälja</a></li>
        <li><a href="/about">Om oss</a></li> {/* Lägg till länk till Om oss-sidan */}
        <li><a href="/contact">Kontakt</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;