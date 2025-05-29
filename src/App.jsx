import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Drives from './components/Drives';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/drives" element={<Drives />} />
          {/* Add more routes as needed */}
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
