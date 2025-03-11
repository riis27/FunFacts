// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import Fact1 from './Fact1';
import Fact2 from './Fact2';
import Fact3 from './Fact3';
import Fact4 from './Fact4';
import ContactPage from './ContactPage';
import Navbar from './Navbar'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; 
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> 

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/fact1" element={<Fact1 />} />
          <Route path="/fact2" element={<Fact2 />} />
          <Route path="/fact3" element={<Fact3 />} />
          <Route path="/fact4" element={<Fact4 />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;