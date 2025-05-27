import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import Drives from './components/Drives';

function App() {
  return (
    <div className="App">
    
      <Drives/>
      <HomePage />
    </div>
  );
}

export default App;