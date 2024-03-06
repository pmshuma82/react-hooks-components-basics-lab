// src/components/App.js
import React from 'react';
import Navbar from './Navbar'; // Import Navbar component using relative path
import Home from './Home'; // Import Home component using relative path
import About from './About'; // Import About component using relative path

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;
w