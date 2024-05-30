import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface WithAdminAuthProps {}

const withAdminAuth = (WrappedComponent: React.ComponentType<WithAdminAuthProps>) => {
  const ComponentWithAdminAuth: React.FC<WithAdminAuthProps> = (props) => {
    // get roleList from localStorage
    const roleListString = localStorage.getItem('roleList');
    const roleList = roleListString ? JSON.parse(roleListString) : [];
    // if role is not admin, redirect to home page else render the component
    const isAdmin = roleList.some((role: { authority: string }) => role.authority === 'ROLE_ADMIN');
    const location = useLocation();

    if (!isAdmin) {
      return <Navigate to="/" state={{ from: location }} replace />;
    }

    return <WrappedComponent {...props} />;
  };

  return ComponentWithAdminAuth;
};

export default withAdminAuth;
