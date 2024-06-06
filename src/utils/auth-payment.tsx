import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface WithBookingCheckProps {}

const WithBookingCheck = (WrappedComponent: React.ComponentType<WithBookingCheckProps>) => {
  const ComponentWithBookingCheck: React.FC<WithBookingCheckProps> = (props) => {
    const [hasBooking, setHasBooking] = useState<boolean | null>(null);
    const location = useLocation();

    useEffect(() => {
      const booking = localStorage.getItem('booking');
      setHasBooking(!!booking);
    }, []);

    if (hasBooking === null) {
      return null; // Or a spinner or placeholder while checking the booking status
    }

    if (!hasBooking) {
      return <Navigate to="/" state={{ from: location }} replace />;
    }

    return <WrappedComponent {...props} />;
  };

  return ComponentWithBookingCheck;
};

export default WithBookingCheck;
