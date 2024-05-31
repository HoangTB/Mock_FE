import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface WithUserAuthProps {}

const WithUserAuth = (WrappedComponent: React.ComponentType<WithUserAuthProps>) => {
  const ComponentWithUserAuth: React.FC<WithUserAuthProps> = (props) => {
    const [isUser, setIsUser] = useState<boolean | null>(null);
    const location = useLocation();

    useEffect(() => {
      const token = localStorage.getItem('token');
      const roleListString = localStorage.getItem('roleList');
      if (token && roleListString) {
        const roleList = JSON.parse(roleListString);
        const userRoleExists = roleList.some((role: { authority: string }) => role.authority === 'ROLE_USER');
        setIsUser(userRoleExists);
      } else {
        setIsUser(false);
      }
    }, []);

    if (isUser === null) {
      return null; // Hoặc một spinner hoặc placeholder khác khi đang kiểm tra trạng thái đăng nhập
    }

    if (
      isUser &&
      (location.pathname === '/login' ||
        location.pathname === '/register' ||
        location.pathname.startsWith('/reset') ||
        location.pathname === '/forgot')
    ) {
      return <Navigate to="/" state={{ from: location }} replace />;
    }

    if (!isUser) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return <WrappedComponent {...props} />;
  };

  return ComponentWithUserAuth;
};

export default WithUserAuth;
