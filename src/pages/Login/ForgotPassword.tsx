import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import React, { useState } from 'react';

const ForgotPassword: React.FC = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/forgot-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email })
            });

            if (response.ok) {
                const result = await response.text();
                setMessage(result);
            } else {
                throw new Error('Forgot password failed');
            }
        } catch (error) {
            console.error('Forgot password error:', error);
            alert('Forgot password failed');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
            />
            <button type="submit">Send Reset Password Request</button>
            {message && <p>{message}</p>}
        </form>
    );
};

export default ForgotPassword;