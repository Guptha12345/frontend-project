// src/components/Footer.js
import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import companyLogo from '../assets/letter-v.png'; // Add your company logo here

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-logo">
            <img src={companyLogo} alt="Company Logo" />
          </div>
          <div className="footer-sections">
            <div className="footer-section">
              <h3 className="footer-heading">Company</h3>
              <ul>
                <li><a href="/about">About Us</a></li>
                <li><a href="/careers">Careers</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3 className="footer-heading">Learn</h3>
              <ul>
                <li><a href="/courses">Courses</a></li>
                <li><a href="/certifications">Certifications</a></li>
                <li><a href="/tutors">Tutors</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3 className="footer-heading">Resources</h3>
              <ul>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/webinars">Webinars</a></li>
                <li><a href="/ebooks">Ebooks</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3 className="footer-heading">Support</h3>
              <ul>
                <li><a href="/faq">FAQ</a></li>
                <li><a href="/help-center">Help Center</a></li>
                <li><a href="/support">Customer Support</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-social">
            <h3 className="footer-heading">Follow Us</h3>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
          <div className="footer-info">
            <p>&copy; 2024 Vcube Software Solutions. All rights reserved.</p>
            <p>Made with ❤️ by Your Company</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
