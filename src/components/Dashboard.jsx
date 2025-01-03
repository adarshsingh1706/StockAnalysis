import React from "react";

const Dashboard = () => {
  const accessToken = localStorage.getItem("accessToken");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800 text-white">
      {accessToken ? (
        <div>
          <h1 className="text-2xl mb-4">Welcome to the Dashboard</h1>
          <p>Your Access Token:</p>
          <code className="bg-gray-700 p-2 rounded">{accessToken}</code>
        </div>
      ) : (
        <p>Please login to access this page.</p>
      )}
    </div>
  );
};

export default Dashboard;
