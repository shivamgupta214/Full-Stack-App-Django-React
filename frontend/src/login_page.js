import React, { useState } from 'react';
import axios from 'axios';
import './loginPage.css';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/register/', {
                username,
                password,
            });
            setMessage(response.data.message);
        } catch (error) {
            setMessage(error.response?.data.error || 'An error occurred');
        }
    };

    return (
        <div><h1>adrnzkdlbzdkglnbxdgnklbnzfklgbxfkgnxfnklxfgnkkxfgnlxfgnkfnxfn</h1>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Register</button>
            </form>
            <p>{message}</p>
        </div>
    );
};

export default Register;
