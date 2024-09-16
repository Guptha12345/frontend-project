import React from 'react';
import './Contact.css';
import Dashboardbutton from '../components/Dashboardbutton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <div className="contact-grid">
        <div className="contact-info">
          <div className="contact-card">
            <FontAwesomeIcon icon={faPhone} className="contact-icon" />
            <h3>Phone</h3>
            <p>+123 456 7890</p>
          </div>
          <div className="contact-card">
            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
            <h3>Email</h3>
            <p>info@vcube.com</p>
          </div>
          <div className="contact-card">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
            <h3>Address</h3>
            <p>123 Main Street, Hyderabad, India</p>
          </div>
        </div>
        <div className="contact-form-container">
          <form className="contact-form">
            <h3>Send us a message</h3>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="contact-button">Send Message</button>
          </form>
        </div>
      </div>
      <div>
      <Dashboardbutton to="/" label="Back to Dashboard" />
      </div>
    </div>
  );
};

export default Contact;
