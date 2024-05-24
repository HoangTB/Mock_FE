import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import React from 'react';

const Logout: React.FC = () => {
    const handleLogout = () => {
        localStorage.removeItem('token');
    };

    return (
        <button onClick={handleLogout}>Logout</button>
    );
};

export default Logout;
