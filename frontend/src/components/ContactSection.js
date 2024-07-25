import React from 'react';
import ContactForm from './ContactForm';
import '../css/ContactSection.css';

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h2>For <br /><span className="highlight">Queries</span></h2>
          <p>Subheading for instructions</p>
        </div>
        <ContactForm />
      </div>
      <div className='copy-right'>
        <div className="social-links">
          <p>Connect <br /> with <span className="highlight">Us</span></p>
          <div className="icons">
            <button onClick={() => window.open('https://www.facebook.com', '_blank')} aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </button>
            <button onClick={() => window.open('https://www.linkedin.com', '_blank')} aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </button>
            <button onClick={() => window.location.href = 'mailto:someone@example.com'} aria-label="Email">
              <i className="fas fa-envelope"></i>
            </button>
            <button onClick={() => window.open('https://www.instagram.com', '_blank')} aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </button>
          </div>
        </div>
        <h3>© 2024 Copyrights MCS</h3>
      </div>
    </section>
  );
};

export default ContactSection;
