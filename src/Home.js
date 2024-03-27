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
          <div className ='provision'>
            <p1>Vi tar hand om alla betalningar direkt, så ni behöver inte oroa er för fakturor. Er provision betalas ut omedelbart efter avslutad försäljning. Så enkelt är det!</p1>
          </div>
        </div>
      </div>

      <div className='sida2'>
        <img src={godis} className="godis"></img>
        <div className='godistext'>
          <p1 className='textruta'>Här är några anledningar till varför ni bör välja oss:</p1>
          <br />
          <p></p>
          <p1 className='litentextruta'> Ni får tillgång till några av de mest omtyckta godismärkena på marknaden.</p1>
          <br />
          <p></p>
          <p1 className='litentextruta'>Vår innovativa webbshoplösning förenklar hela försäljningsprocessen. Ni behöver inte längre oroa er för hantering av pengar - varken inom föreningen eller klassen. Det är slut med att samla in kontanter eller swisha pengar.</p1>
          <br />
          <p></p>
          <p1 className='litentextruta'>Genom att dela era personliga webbshop-länkar kan kunderna enkelt och bekvämt betala direkt.</p1>
          <p></p>
          <p1 className='litentextruta'>Ni behöver endast hantera distributionen av godiset till era nära och kära.
          Er förtjänst betalas ut till administratörens bankkonto eller direkt till föreningens konto efter varje lyckad försäljning.
          </p1>      
        </div>
      </div>
      <img src={steg123} alt="Steg 1" className="steg-img" />
    </div>
    
  );
}

export default Home;