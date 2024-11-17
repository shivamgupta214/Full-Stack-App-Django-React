// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation

const Navbar = () => {
    return (
        <nav style={styles.navbar}>
            <h1 ><Link to="/">My App</Link></h1>
            <div style={styles.links}>
                {/* <Link to="/" style={styles.link}>Home</Link> */}
                <Link to="/resumescorer" style={styles.link}>Resume Scorer</Link>
                <Link to="/portfolio" style={styles.link}>Portfolio</Link>
                <Link to="/login" style={styles.link}>Login</Link>
            </div>
        </nav>
    );
};

// Styles for the navbar
const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        background: '#001d36',
        //color: '#fff',
    },
    title: {
        margin: 0,
    },
    links: {
        display: 'flex',
        gap: '15px',
    },
    link: {
        color: '#fff',
        textDecoration: 'none',
    },
};

export default Navbar;
