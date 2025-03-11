import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Women & Economics: Just the Facts</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;