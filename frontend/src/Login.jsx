import React, { useState } from 'react';
import axios from 'axios';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [message, setMessage] = useState('');
    let isLoggedin = false;


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/login/', {
                username,
                password,
            });
            setMessage(response.data.message);
            sessionStorage.setItem('username', username);
            console.log("response data", response.data)
            isLoggedin = true;
            sessionStorage.setItem('islogin', isLoggedin)
            window.location.href = '/';
        } catch (error) {
            console.error('Error logging user:', error.message);
            setError('Error logging user. Please try again.');
        }
    };

    return (
        <div style={styles.container}>
            <div className='container'>
                <h2>Login</h2>
                <form onSubmit={handleSubmit} className='space-y-4'>
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
                    <button type="submit">Login</button>
                </form>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <p>{message}</p>
                <a href="/register">Not a member? Sign up here!</a>
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        backgroundColor: '#0a192f',
        color: '#ccd6f6',
        padding: '50px',
        fontFamily: 'Arial, sans-serif',
      },
};

export default Login;



