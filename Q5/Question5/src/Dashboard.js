import React, { useState } from 'react';
import AdminDashboard from './AdminDashboard';
import UserDashboard from './UserDashboard';

const Dashboard = () => {
  const [userType, setUserType] = useState('user'); // default user type
  const [userName, setUserName] = useState('John Doe'); // default user name

  const handleLogout = () => {
    // logout functionality
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {userName}!</p>
      {userType === 'admin' ? <AdminDashboard /> : <User Dashboard />}
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
};

export default Dashboard;
