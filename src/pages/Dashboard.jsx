import React from 'react';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { currentUser } = useAuth();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Welcome to Your Dashboard</h1>
      <p className="mt-2">Logged in as: {currentUser?.email}</p>
      {/* Future: Add expense tracker UI here */}
    </div>
  );
};

export default Dashboard;
