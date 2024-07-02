// src/components/UpcomingEvents.js

import React, { useState, useEffect } from 'react';
import '../css/UpcomingEvents.css';
import eventImage from '../images/Event.png'; // Importing the new image

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events from an API or database
    // For demonstration, we're using a static list
    const fetchedEvents = [
      {
        id: 1,
        title: 'AlgoArena',
        description: 'Lorem ipsum dolor sit amet consectetur. Ornare dolor id turpis sit. Praesent massa tortor iaculis sit orci. Cras volutpat tempus adipiscing diam eget malesuada. Venenatis ut eget imperdiet in elementum neque eleifend eu. Vestibulum dignissim et leo massa velit sed mauris. Nisl molestie felis augue pharetra mauris ultricies eu pellentesque. Elementum fermentum porttitor id interdum nec purus platea.',
        image: eventImage
      },
      // Add more events as needed
    ];
    setEvents(fetchedEvents);
  }, []);

  return (
    <section className="upcoming-events-container">
      <header className="event-header">
        <h1 className="event-title">
          <span className="upcoming">UPCOMING</span> <span className="events">EVENTS</span>
        </h1>
      </header>
      {events.map(event => (
        <div className="event-content" key={event.id}>
          <div className="event-layout">
            <div className="event-image-column">
              <img 
                loading="lazy" 
                src={event.image} 
                className="event-image" 
                alt={`${event.title} visual representation`} 
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
