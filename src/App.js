import React from 'react';
import Navbar from './Navbar'; // Ange sökvägen till din Navbar-komponent
import About from "./About"; 
function App() {
  return (
    <div className="App">
      <Navbar /> {/* Här inkluderar du Navbar-komponenten */}
      {/* Här kan du lägga till resten av din applikations JSX */}
    </div>
  );
}

export default App;
