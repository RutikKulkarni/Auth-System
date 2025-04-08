import React from "react";
import { Navigate } from "react-router-dom";
import AuthService from "../services/authService";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = AuthService.isAuthenticated();

  if (!isAuthenticated) {
    return <Navigate to="/signin" replace />;
  }

  return children;
};

export default PrivateRoute;
