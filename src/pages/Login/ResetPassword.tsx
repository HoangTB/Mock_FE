import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const ResetPassword: React.FC = () => {
    const query = new URLSearchParams(useLocation().search);
    const token = query.get('token') || '';
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/reset-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ token, newPassword })
            });

            if (response.ok) {
                const result = await response.text();
                setMessage(result);
            } else {
                throw new Error('Reset password failed');
            }
        } catch (error) {
            console.error('Reset password error:', error);
            alert('Reset password failed');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="New Password"
                required
            />
            <button type="submit">Reset Password</button>
            {message && <p>{message}</p>}
        </form>
    );
};

export default ResetPassword;