import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="overview-footer">
      <div className="footer-section">
        <p>&copy; 2024 SOLshare International Pte. Ltd. All rights reserved.</p>
      </div>
      <div className="footer-section">
        <h3>Quick Links</h3>
        <a href="/career">Career</a>
        <a href="/publications">Publications</a>
        <a href="/news">News</a>
        <a href="/privacy-policy">Privacy policy</a>
        <a href="/contact">Contact Us</a>
      </div>
      <div className="footer-section">
        <h3>Contact Us</h3>
        <p>LM Tower (2nd Floor), Ka/87, Joar Shahara Bazar Road</p>
        <p>Vatara, Dhaka–1229, Bangladesh</p>
        <a href="tel:+8801708458769">+880 1708 458769</a>
        <a href="mailto:contact@solshare.com">contact@solshare.com</a>
      </div>
      <div className="footer-section">
        <h3>Subscribe to our Newsletter</h3>
        <input type="email" placeholder="Enter your email" />
        <button className="subscribe-btn">SUBSCRIBE</button>
      </div>
      <div className="footer-section">
        <h3>Follow Us</h3>
        <div className="social-links">
          <a href="https://www.facebook.com/mesolshare/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com/solshare_official/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/company/solshare/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://twitter.com/solshareoffice" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.youtube.com/channel/UCwZcEAuHgALBvTSHxBTJgxg" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
