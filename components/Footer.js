import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>Fresh & Healthy</h3>
            <p>Your trusted source for fresh, organic, and nutritious foods. We're committed to helping you live a healthier lifestyle through quality ingredients.</p>
            <div className="social-links">
              <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
              <a href="https://x.com/"><i className="fab fa-twitter"></i></a>
              <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
              <a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/Home">Home</Link></li>
              <li><Link to="/salads">Salads</Link></li>
              <li><Link to="/Juices">Juices</Link></li>
              <li><Link to="/Fruits">Fruits</Link></li>
              <li><Link to="/About">About Us</Link></li>
              <li><Link to="/Contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Our Products</h3>
            <ul className="footer-links">
              <li><a href="\src\pages\Salads.js">Organic Salads</a></li>
              <li><a href="\src\pages\Juices.js">Fresh Juices</a></li>
              <li><a href="\src\pages\Fruits.js">Seasonal Fruits</a></li>
              
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Newsletter</h3>
            <p>Subscribe to our newsletter for the latest updates and offers.</p>
            <form className="newsletter-form">
              <div className="form-group">
                <input type="email" className="form-control" placeholder="Your Email" required />
              </div>
              <button type="submit" className="btn">Subscribe</button>
            </form>
          </div>
        </div>
        
        <div className="copyright">
          <p>&copy; 2025 Fresh & Healthy. All rights reserved. | Designed with <i className="fas fa-heart" style={{color: '#e74c3c'}}></i> for healthy living</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;