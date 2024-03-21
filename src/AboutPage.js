import React from 'react';
import { motion } from 'framer-motion';
import './AboutPage.css'; // Importera CSS-filen för styling
import backgroundImg from './barn.png'; // Importera bakgrundsbilden

const AboutUs = () => {
  return (
    <motion.div className="about-us-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ backgroundImage: `url(${backgroundImg})` }}>
      <motion.div className="title-container" whileHover={{ scale: 1.1 }}>
        <h1>Välkommen till Godiskassan - där drömmar blir till godis!</h1>
      </motion.div>
      <div className="description-container">
        <p>
          Godiskassan grundades av en engagerad grupp vuxna, vars egna barn, syskonbarn, kusiner och kollegors barn ofta fick sälja kakor och godis för att samla ihop pengar till olika aktiviteter för klassen eller föreningen. När vår grundare insåg att dagens lösningar var föråldrade och att i stort sett allt ansvar lades på barnen – från att hantera betalningar, swisha varandra, betala fakturor till att till och med leverera godiset för att olika företag skulle tjäna pengar – föddes en idé. Förutom den tunga börda och ansvaret som lades på barnen, fanns det även en stor del av branschens intäkter som inte beskattades. Där föddes konceptet för Godiskassan!
        </p>
        <p>
          Godiskassan förenklar för skolor och föreningar genom att erbjuda en enkel och riskfri möjlighet att tjäna pengar med vår innovativa webbshopslösning. Elever eller idrottare ska inte behöva gå runt och samla in kontanter eller swisha olika summor till ett konto. Dessutom behöver inte allt ansvar läggas på en person för att samla in pengarna, då vi inte skickar ut några fakturor.
        </p>
        <p>
          Genom våra webbshop-länkar som ni kan distribuera kan kunderna betala direkt via Swish eller kort och vi tar hand om hela pengaflödet. Vi skickar aldrig ut några fakturor. Efter avslutad försäljning skickar vi ut era produkter och barnen kan sedan dela ut dem. Samtidigt ser vi till att rätt skatter och avgifter betalas för försäljningen och överför sedan er provision till det angivna kontot, helt riskfritt för alla involverade!
        </p>
        <p>
          Vi välkomnar er varmt att testa oss och göra godisförsäljningen enklare för barnen.
        </p>
      </div>
    </motion.div>
  );
};

export default AboutUs;