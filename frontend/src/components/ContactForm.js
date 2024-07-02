import React from 'react';
import '../css/ContactForm.css';

const ContactForm = () => {
  return (
    <div className="form-container">
      <form>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Subject" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button type="submit" className="send-message">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
