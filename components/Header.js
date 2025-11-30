import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo">
          <i className="fas fa-leaf"></i>
          <span>Fresh & Healthy</span>
        </Link>
        
        <div className="nav-toggle" id="navToggle" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </div>
        
        <nav>
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`} id="navMenu">
            <li><Link className="nav-link" to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link className="nav-link" to="/salads" onClick={() => setIsMenuOpen(false)}>Salads</Link></li>
            <li><Link className="nav-link" to="/juices" onClick={() => setIsMenuOpen(false)}>Juices</Link></li>
            <li><Link className="nav-link" to="/fruits" onClick={() => setIsMenuOpen(false)}>Fruits</Link></li>
            <li><Link className="nav-link" to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
            <li><Link className="nav-link" to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;