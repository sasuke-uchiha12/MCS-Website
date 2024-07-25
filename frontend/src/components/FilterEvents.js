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
    <section className="filter-events-container">
      <header className="filter-event-header">
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
        <div className="filter-event-content" key={event._id}>
          <div className="filter-event-layout">
            <div className="filter-event-image-column">
              <img 
                loading="lazy" 
                src={event.image} 
                className="filter-event-image" 
                alt={event.title} 
              />
            </div>
            <div className="filter-event-details-column">
              <div className="filter-event-details">
                <h1 className='filter-event-heading'>{event.title}</h1>
                <p className="filter-event-description">
                  {event.description}
                </p>
                {event.formLink ? (
                  <a 
                    href={event.formLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="filter-register-btn"
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

export default FilterEvents;
