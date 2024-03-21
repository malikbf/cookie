import React, { useState } from 'react';
import Navbar from './Navbar';
import './Home.css'; 
import knapp from './knapp.png'; // Importera bilden
import godis from './godis.png'
import steg123 from './steg123.png'; // Importera Steg 123-bilden
import { Link } from 'react-router-dom';

function Home() {
  // Hålla reda på om extra innehåll ska visas eller inte för Steg 1
  const [showExtraContent, setShowExtraContent] = useState(false);

  // Funktion för att visa/dölja extra innehåll för Steg 1
  const toggleExtraContent = () => {
    setShowExtraContent(!showExtraContent);
  };

  return (
    <div className='sida'>
      <div className="home-background"> 
        <Navbar />
        <div className="hej">
          <h1>Tjäna pengar till laget, klassen eller föreningen!</h1>
          <button className="knapp">
            <Link className='link' to="/sell">Börja försäljning!</Link>
            <img src={knapp} alt="Knapp" className="knapp-img" />
            <img src={knapp} alt="Knapp" className="knapp-img-right" />
          </button>
        </div>
      </div>

      <div className='sida2'>
        <img src={godis} className="godis"></img>
        <div className='godistext'>
          <p1 className='textruta'>Sälj populära och lättsålda delikatesser!</p1>
          <br />
          <p></p>
          <p1 className='litentextruta'> Det finns flera anledningar till varför ni ska välja DelikatessKungen, först och främst är det för våra delikatesser.</p1>
          <br />
          <p></p>
          <p1 className='litentextruta'>Med efterfrågade produkter blir det roligare och enklare att tjäna pengar till föreningen, klassen eller laget. Alla produkter är noggrant utvalda och av hög kvalitet.</p1>
          <br />
          <p></p>
          <p1 className='litentextruta'>Ni säljer alla våra delikatesser vid en försäljning.</p1>
        </div>
      </div>
      <img src={steg123} alt="Steg 1" className="steg-img" />
    </div>
    
  );
}

export default Home;