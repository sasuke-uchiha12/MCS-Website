import React, { useState, useEffect } from 'react';
import '../css/UpcomingEvents.css';

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/events')
      .then(response => response.json())
      .then(data => {
        const sortedEvents = data
          .filter(event => new Date(event.date) >= new Date()) // Filter for upcoming events
          .sort((a, b) => new Date(a.date) - new Date(b.date)); // Sort by date
        setEvents(sortedEvents);
      })
      .catch(error => console.error('Error fetching events:', error));
  }, []);

  return (
    <section className="upcoming-events-container">
      <header className="event-header">
        <h1 className="event-title">
          <span className="upcoming">UPCOMING</span> <span className="events">EVENTS</span>
        </h1>
      </header>
      {events.map(event => (
        <div className="event-content" key={event._id}>
          <div className="event-layout">
            <div className="event-image-column">
              <img 
                loading="lazy" 
                src={event.image} 
                className="event-image" 
                alt={event.title} 
              />
            </div>
            <div className="event-details-column">
              <div className="event-details">
                <p className="event-description">
                  {event.description}
                </p>
                <button className="register-btn" tabindex="0">Register</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default UpcomingEvents;
