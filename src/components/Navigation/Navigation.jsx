import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navigation" role="navigation" aria-label="Main navigation">
      <div className="container nav-container">
        <div className="nav-brand">
          <Link to="/" className="brand-link">
            <div className="brand-logo">
              <span className="logo-icon">🏠</span>
              <span className="brand-text">
                <span className="brand-name">Suffolk Cleaning Hub</span>
                <span className="brand-tagline">Professional Cleaning Services</span>
              </span>
            </div>
          </Link>
        </div>

        <button 
          className={`nav-toggle ${isMenuOpen ? 'nav-toggle--open' : ''}`}
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="nav-menu"
          aria-label="Toggle navigation menu"
        >
          <span className="nav-toggle__line"></span>
          <span className="nav-toggle__line"></span>
          <span className="nav-toggle__line"></span>
        </button>

        <div className={`nav-menu ${isMenuOpen ? 'nav-menu--open' : ''}`} id="nav-menu">
          <ul className="nav-links">
            <li>
              <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/blog" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                Blog
              </Link>
            </li>
          </ul>
          <div className="nav-cta">
            <Link to="/contact" className="btn btn-primary" onClick={() => setIsMenuOpen(false)}>
              Get Free Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;