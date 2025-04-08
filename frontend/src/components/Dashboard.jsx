import React from "react";
import AuthService from "../services/authService";

const Dashboard = () => {
  const currentUser = AuthService.getCurrentUser();

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h2>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="text-blue-700">
            Welcome to your dashboard! You've successfully authenticated.
          </p>
        </div>

        {currentUser && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Your Profile
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded">
                <p className="text-sm text-gray-500">First Name</p>
                <p className="font-medium text-gray-800">
                  {currentUser.firstName}
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <p className="text-sm text-gray-500">Last Name</p>
                <p className="font-medium text-gray-800">
                  {currentUser.lastName}
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded col-span-1 md:col-span-2">
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium text-gray-800">{currentUser.email}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
