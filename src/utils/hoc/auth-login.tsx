import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface WithLoginAuth {}

const WithLoginAuth = (WrappedComponent: React.ComponentType<WithLoginAuth>) => {
  const ComponentWithUserAuth: React.FC<WithLoginAuth> = (props) => {
    // get token from localStorage
    // if token, redirect to home page
    const token = localStorage.getItem('token');
    const location = useLocation();

    if (token) {
      return <Navigate to="/" state={{ from: location }} replace />;
    }

    return <WrappedComponent {...props} />;
  };

  return ComponentWithUserAuth;
};

export default WithLoginAuth;
