import React, { useState, useEffect } from 'react';
import '../css/FilterEvents.css';

const FilterEvents = () => {
  const [events, setEvents] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('events');

  useEffect(() => {
    fetch('http://localhost:5000/events')
      .then(response => response.json())
      .then(data => setEvents(data))
      .catch(error => console.error('Error fetching events:', error));
  }, []);

  const filteredEvents = events.filter(event => event.category === selectedCategory);

  return (
    <section className="upcoming-events-container">
      <header className="event-header">
        <div className="category-buttons">
          <button 
            className={`category-btn ${selectedCategory === 'events' ? 'active' : ''}`} 
            onClick={() => setSelectedCategory('events')}
          >
            EVENTS
          </button>
          <button 
            className={`category-btn ${selectedCategory === 'workshops' ? 'active' : ''}`} 
            onClick={() => setSelectedCategory('workshops')}
          >
            WORKSHOP
          </button>
          <button 
            className={`category-btn ${selectedCategory === 'sessions' ? 'active' : ''}`} 
            onClick={() => setSelectedCategory('sessions')}
          >
            SESSION
          </button>
        </div>
      </header>
      {filteredEvents.map(event => (
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

export default FilterEvents;
