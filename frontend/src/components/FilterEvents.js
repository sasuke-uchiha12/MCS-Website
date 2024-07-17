import React, { useState, useEffect } from 'react';
import '../css/FilterEvents.css';
import eventImage from '../images/Event.png';

const FilterEvents = () => {
  const [events, setEvents] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('events');

  useEffect(() => {
    const fetchedEvents = [
      {
        id: 1,
        title: 'AlgoArena',
        description: 'Lorem ipsum dolor sit amet consectetur. Ornare dolor id turpis sit. Praesent massa tortor iaculis sit orci. Cras volutpat tempus adipiscing diam eget malesuada. Venenatis ut eget imperdiet in elementum neque eleifend eu. Vestibulum dignissim et leo massa velit sed mauris. Nisl molestie felis augue pharetra mauris ultricies eu pellentesque. Elementum fermentum porttitor id interdum nec purus platea.',
        image: eventImage,
        category: 'events'
      },
      {
        id: 2,
        title: 'React Workshop',
        description: 'Learn the basics of React and start building your own web applications.',
        image: eventImage,
        category: 'workshops'
      },
      {
        id: 3,
        title: 'Coding Session',
        description: 'Join us for a coding session to enhance your programming skills.',
        image: eventImage,
        category: 'sessions'
      },
      {
        id: 4,
        title: 'AlgoArena',
        description: 'Lorem ipsum dolor sit amet consectetur. Ornare dolor id turpis sit. Praesent massa tortor iaculis sit orci. Cras volutpat tempus adipiscing diam eget malesuada. Venenatis ut eget imperdiet in elementum neque eleifend eu. Vestibulum dignissim et leo massa velit sed mauris. Nisl molestie felis augue pharetra mauris ultricies eu pellentesque. Elementum fermentum porttitor id interdum nec purus platea.',
        image: eventImage,
        category: 'events'
      },
      {
        id: 5,
        title: 'AlgoArena',
        description: 'Lorem ipsum dolor sit amet consectetur. Ornare dolor id turpis sit. Praesent massa tortor iaculis sit orci. Cras volutpat tempus adipiscing diam eget malesuada. Venenatis ut eget imperdiet in elementum neque eleifend eu. Vestibulum dignissim et leo massa velit sed mauris. Nisl molestie felis augue pharetra mauris ultricies eu pellentesque. Elementum fermentum porttitor id interdum nec purus platea.',
        image: eventImage,
        category: 'events'
      }
    ];
    setEvents(fetchedEvents);
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

export default FilterEvents;
