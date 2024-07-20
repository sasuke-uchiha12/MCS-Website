import React, { useState, useEffect } from 'react';
import '../css/AdminDashboard.css';
import Modal from 'react-modal';

const AdminDashboard = ({ token }) => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ title: '', description: '', image: '', category: '', date: '', formLink: '' });
  const [editEvent, setEditEvent] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [useFileUpload, setUseFileUpload] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/events', {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(response => response.json())
      .then(data => setEvents(data))
      .catch(error => console.error('Error fetching events:', error));
  }, [token]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (editEvent) {
      setEditEvent({ ...editEvent, [name]: value });
    } else {
      setNewEvent({ ...newEvent, [name]: value });
    }
  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let imageUrl = newEvent.image;
    if (useFileUpload && imageFile) {
      const formData = new FormData();
      formData.append('file', imageFile);

      const res = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData
      });

      if (!res.ok) {
        console.error('Failed to upload image');
        return;
      }

      const file = await res.json();
      imageUrl = file.url;
    }

    const eventToSubmit = { ...newEvent, image: imageUrl };

    fetch('http://localhost:5000/events', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` 
      },
      body: JSON.stringify(eventToSubmit)
    })
    .then(response => response.json())
    .then(data => setEvents([...events, data]))
    .catch(error => console.error('Error adding event:', error));
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();

    let imageUrl = editEvent.image;
    if (useFileUpload && imageFile) {
      const formData = new FormData();
      formData.append('file', imageFile);

      const res = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData
      });

      if (!res.ok) {
        console.error('Failed to upload image');
        return;
      }

      const file = await res.json();
      imageUrl = file.url;
    }

    const eventToSubmit = { ...editEvent, image: imageUrl };

    fetch(`http://localhost:5000/events/${editEvent._id}`, {
      method: 'PUT',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` 
      },
      body: JSON.stringify(eventToSubmit)
    })
    .then(response => response.json())
    .then(data => {
      setEvents(events.map(event => event._id === data._id ? data : event));
      setEditEvent(null);
      setImageFile(null); // Clear image file after edit
      setUseFileUpload(true); // Reset useFileUpload state
    })
    .catch(error => console.error('Error updating event:', error));
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/events/${id}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(() => setEvents(events.filter(event => event._id !== id)))
      .catch(error => console.error('Error deleting event:', error));
  };

  const openEditModal = (event) => {
    setEditEvent(event);
    setUseFileUpload(event.image ? true : false); // Determine whether to use file upload or URL based on existing image
  };

  return (
    <div className="admin-dashboard-container">
      <h1>Admin Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" value={newEvent.title} onChange={handleChange} required />
        <textarea name="description" placeholder="Description" value={newEvent.description} onChange={handleChange} required></textarea>
        
        <div className="image-upload-options">
          <label>
            <input 
              type="radio" 
              name="imageSource" 
              value="file" 
              checked={useFileUpload} 
              onChange={() => setUseFileUpload(true)} 
            /> 
            Upload Image
          </label>
          <label>
            <input 
              type="radio" 
              name="imageSource" 
              value="url" 
              checked={!useFileUpload} 
              onChange={() => setUseFileUpload(false)} 
            /> 
            Use Image URL
          </label>
        </div>
        
        {useFileUpload ? (
          <input type="file" name="imageFile" onChange={handleFileChange} required={!newEvent.image} />
        ) : (
          <input type="text" name="image" placeholder="Image URL" value={newEvent.image} onChange={handleChange} required />
        )}
        
        <select name="category" value={newEvent.category} onChange={handleChange} required>
          <option value="">Select Category</option>
          <option value="events">Events</option>
          <option value="workshops">Workshops</option>
          <option value="sessions">Sessions</option>
        </select>
        <input type="date" name="date" placeholder="Date" value={newEvent.date} onChange={handleChange} required />
        <input type="text" name="formLink" placeholder="Google Form Link" value={newEvent.formLink} onChange={handleChange} />
        <button type="submit">Add Event</button>
      </form>
      <ul>
        {events.map(event => (
          <li key={event._id} className="event-item">
            <img src={event.image} alt={event.title} className="event-image" />
            <div className="event-details">
              <h2>{event.title}</h2>
              <p><strong>Description:</strong> {event.description}</p>
              <p><strong>Category:</strong> {event.category}</p>
              <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
              {event.formLink && <a href={event.formLink} target="_blank" rel="noopener noreferrer" className="register-btn">Register</a>}
            </div>
            <div className="event-actions">
              <button onClick={() => openEditModal(event)} className="edit-btn">Edit</button>
              <button onClick={() => handleDelete(event._id)} className="delete-btn">Delete</button>
            </div>
          </li>
        ))}
      </ul>

      {editEvent && (
        <Modal isOpen={true} onRequestClose={() => setEditEvent(null)} className="edit-modal" overlayClassName="edit-modal-overlay">
          <h2>Edit Event</h2>
          <form onSubmit={handleEditSubmit}>
            <input type="text" name="title" placeholder="Title" value={editEvent.title} onChange={handleChange} required />
            <textarea name="description" placeholder="Description" value={editEvent.description} onChange={handleChange} required></textarea>
            
            <div className="image-upload-options">
              <label>
                <input 
                  type="radio" 
                  name="imageSource" 
                  value="file" 
                  checked={useFileUpload} 
                  onChange={() => setUseFileUpload(true)} 
                /> 
                Upload Image
              </label>
              <label>
                <input 
                  type="radio" 
                  name="imageSource" 
                  value="url" 
                  checked={!useFileUpload} 
                  onChange={() => setUseFileUpload(false)} 
                /> 
                Use Image URL
              </label>
            </div>
            
            {useFileUpload ? (
              <input type="file" name="imageFile" onChange={handleFileChange} required={!editEvent.image} />
            ) : (
              <input type="text" name="image" placeholder="Image URL" value={editEvent.image} onChange={handleChange} required />
            )}
            
            <select name="category" value={editEvent.category} onChange={handleChange} required>
              <option value="">Select Category</option>
              <option value="events">Events</option>
              <option value="workshops">Workshops</option>
              <option value="sessions">Sessions</option>
            </select>
            <input type="date" name="date" placeholder="Date" value={editEvent.date} onChange={handleChange} required />
            <input type="text" name="formLink" placeholder="Google Form Link" value={editEvent.formLink} onChange={handleChange} />
            <button type="submit">Update Event</button>
            <button type="button" onClick={() => setEditEvent(null)}>Cancel</button>
          </form>
        </Modal>
      )}
    </div>
  );
};

export default AdminDashboard;
