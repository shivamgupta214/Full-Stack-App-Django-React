import React, { useState } from 'react';
import axios from 'axios';
import './loginPage.css';

const ResumeScorer = () => {
    const [requestR, setRequest] = useState('');
    const [message, setMessage] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/genai/', {
                requestR,
            });
            setMessage(response.data.response);
            console.log(response.data)
        } catch (error) {
            setMessage(error.response?.data.error || 'An error occurred');
        }
        
    };

    return (
        <div>
            <h2>Resume</h2>
            <form onSubmit={handleRegister}>
                <input
                    type="text"
                    placeholder="Username"
                    value={requestR}
                    onChange={(e) => setRequest(e.target.value)}
                />
                <button type="submit">Register</button>
            </form>
            <p>{message}</p>
        </div>
    );
};

export default ResumeScorer;
