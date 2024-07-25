import React, { useState, useEffect } from 'react';
import '../css/UpcomingEvents.css';

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/events')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched events:', data); // Log events to check data
        const sortedEvents = data
          .filter(event => new Date(event.date) >= new Date()) // Filter for upcoming events
          .sort((a, b) => new Date(a.date) - new Date(b.date)); // Sort by date
        setEvents(sortedEvents);
      })
      .catch(error => console.error('Error fetching events:', error));
  }, []);

  return (
    <section className="upcoming-events-container">
      <header className="upcoming-event-header">
        <h1 className="upcoming-event-title">
          <span className="upcoming">UPCOMING</span> <span className="events">EVENTS</span>
        </h1>
      </header>
      {events.map(event => (
        <div className="upcoming-event-content" key={event._id}>
          <div className="upcoming-event-layout">
            <div className="upcoming-event-image-column">
              <img 
                loading="lazy" 
                src={event.image} 
                className="upcoming-event-image" 
                alt={event.title} 
              />
            </div>
            <div className="upcoming-event-details-column">
              <div className="upcoming-event-details">
                <h1 className='upcoming-event-heading'>{event.title}</h1>
                <p className="upcoming-event-description">
                  {event.description}
                </p>
                {event.formLink ? (
                  <a 
                    href={event.formLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="upcoming-register-btn"
                  >
                    Register
                  </a>
                ) : (
                  <p>No registration link available</p>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default UpcomingEvents;
