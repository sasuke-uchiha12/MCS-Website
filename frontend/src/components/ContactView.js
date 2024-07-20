import React, { useState, useEffect } from 'react';

const ContactView = ({ token }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/contact/messages', {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(response => response.json())
      .then(data => setMessages(data))
      .catch(error => console.error('Error fetching messages:', error));
  }, [token]);

  return (
    <div className="messages-container">
      <h2>Contact Messages</h2>
      <ul>
        {messages.map(message => (
          <li key={message._id}>
            <p><strong>Name:</strong> {message.name}</p>
            <p><strong>Subject:</strong> {message.subject}</p>
            <p><strong>Email:</strong> {message.email}</p>
            <p><strong>Message:</strong> {message.message}</p>
            <p><strong>Date:</strong> {new Date(message.date).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactView;
