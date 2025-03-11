// src/App.jsx
import React from 'react';
import { BrowserRouter as BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import Fact1 from './components/Fact1';
import Fact2 from './components/Fact2';
import Fact3 from './components/Fact3';
import Fact4 from './components/Fact4';
import ContactPage from './components/ContactPage';
import Navbar from './components/Navbar'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; 
import './App.css';

function App() {
  return (
    <BrowserRouter basename="/FunFacts">
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
    </BrowserRouter>
  );
}

export default App;