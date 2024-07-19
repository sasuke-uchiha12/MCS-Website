import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import AdminLogin from '../components/AdminLogin';
import AdminDashboard from '../components/AdminDashboard';

const Admin = () => {
  const [token, setToken] = useState(null);

  return (
    <Routes>
      <Route path="/login" element={<AdminLogin setToken={setToken} />} />
      <Route path="/dashboard" element={token ? <AdminDashboard token={token} /> : <Navigate to="/admin/login" />} />
      <Route path="/" element={<Navigate to="/admin/login" />} />
    </Routes>
  );
};

export default Admin;
