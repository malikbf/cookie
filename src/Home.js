import React from 'react';
import Navbar from './Navbar';
import './Home.css'; 
import knapp from './knapp.png'; // Importera bilden
import godis from './godis.png'

function Home() {
  return (
    <div className='sida'>

      <div className="home-background"> 
        <Navbar />
        <div className="content">
          <h1>Tjäna pengar till laget, klassen eller föreningen!</h1>
          <button className="knapp">
            <img src={knapp} alt="Knapp" className="knapp-img" />
            <img src={knapp} alt="Knapp" className="knapp-img-right" />
            Börja försäljning!
          </button>
        
        </div>
      </div>
      
      <div className='sida2'>
        <img src={godis} alt="godis" className="godis"></img>
          <p1 className='textruta'>Sälj populära och lättsålda delikatesser!</p1>
          <p1 className='litentextruta'> Det finns flera anledningar till varför ni ska välja DelikatessKungen, först och främst är det för våra delikatesser.
          <p></p>
Med efterfrågade produkter blir det roligare och enklare att tjäna pengar till föreningen, klassen eller laget. Alla produkter är noggrant utvalda och av hög kvalitet.
          <p></p>
Ni säljer alla våra delikatesser vid en försäljning.</p1>
      </div>
    </div>
  );
}

export default Home;