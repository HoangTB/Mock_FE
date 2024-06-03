import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface WithUserAuthProps {}
const withUserAuth = (WrappedComponent: React.ComponentType<WithUserAuthProps>) => {
  const ComponentWithUserAuth: React.FC<WithUserAuthProps> = (props) => {
    // get roleList from localStorage
    const roleListString = localStorage.getItem('roleList');
    const roleList = roleListString ? JSON.parse(roleListString) : [];
    // if role is not user, redirect to home page else render the component
    const isUser = roleList.some((role: { authority: string }) => role.authority === 'ROLE_USER');
    const location = useLocation();

    if (!isUser) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return <WrappedComponent {...props} />;
  };

  return ComponentWithUserAuth;
};

export default withUserAuth;
