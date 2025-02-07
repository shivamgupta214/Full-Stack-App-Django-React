import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/register/', {
                username,
                password,
                email,
            });
            setMessage(response.data.message);
            window.location.href = '/login';
        } catch (error) {
            setMessage(error.response?.data.error || 'An error occurred');
        }
    };

    return (
        <div className='register-body'>
            <div className="container">
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
                        type="text"
                        placeholder="Email ID"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                <a href="/login">Already a member? Login here!</a>
                <p>{message}</p>
            </div>
        </div>
    );
};

export default Register;
