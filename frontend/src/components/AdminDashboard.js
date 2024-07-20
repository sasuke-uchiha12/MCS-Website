import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import EventsSection from './EventsSection';
import ContactView from './ContactView';
import '../css/AdminDashboard.css';

const AdminDashboard = ({ token }) => {
  return (
    <div className="admin-dashboard-container">
      <nav className="admin-navbar">
        <ul>
          <li><Link to="/admin/events">Events</Link></li>
          <li><Link to="/admin/contact">Contact</Link></li>
        </ul>
      </nav>
      <div className="admin-content">
        <Routes>
          <Route path="events" element={<EventsSection token={token} />} />
          <Route path="contact" element={<ContactView token={token} />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;
