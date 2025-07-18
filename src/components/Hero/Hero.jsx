import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" role="banner">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Premium Cleaning Services
            <span className="hero-subtitle">Across Suffolk</span>
          </h1>
          <p className="hero-description">
            Professional residential and commercial cleaning services in Ipswich, 
            Felixstowe, and Woodbridge. Experience the difference with Suffolk's 
            most trusted cleaning professionals.
          </p>
          <div className="hero-features">
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <span>Fully Insured & Bonded</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <span>Eco-Friendly Products</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <span>Same Day Service Available</span>
            </div>
          </div>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary btn-large">
              Get Free Quote
            </Link>
            <Link to="/services" className="btn btn-secondary btn-large">
              View Services
            </Link>
          </div>
          <div className="hero-contact">
            <p className="contact-text">
              <span className="contact-label">Call Now:</span>
              <a href="tel:+441473123456" className="contact-phone">01473 123 456</a>
            </p>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-placeholder">
            <div className="placeholder-icon">🏠</div>
            <p>Professional Cleaning Service</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;