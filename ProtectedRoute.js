import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth'; // Import your custom authentication hook

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // Show a loading state while checking auth
  }

  return (
    <Route
      {...rest}
      element={user ? Component : <Navigate to="/login" />}
    />
  );
};

export default ProtectedRoute;
