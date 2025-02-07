import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Use useNavigate for programmatic navigation
import axios from 'axios';
import resumePDF from "./Resume.pdf"; 
import { motion } from "framer-motion";
import './Navbar.css';

const Navbar = () => {
    const [islogin, setislogin] = useState(JSON.parse(sessionStorage.getItem('islogin')));
    console.log(islogin);


      const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    
      useEffect(() => {
        const handleMouseMove = (e) => {
          setCursorPos({ x: e.clientX, y: e.clientY });
        };
    
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
      }, []);

    const handleLogout = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/logout/', {
                withCredentials: true, 
            });
            console.log(response.data.message); 

            // Clear frontend session
            sessionStorage.setItem('islogin', JSON.stringify(false));
            setislogin(sessionStorage.getItem('islogin'));
            sessionStorage.removeItem('username');
            window.location.href = "/login";

        } catch (error) {
            console.error('Logout failed:', error.response?.data || error.message);
        }
    };

    return (
        <nav  className='navbar'>
            {/* <h1 style={styles.link}><Link to="/"></Link></h1> */}
            <div  className='links'>
            <motion.div
                className="spotlight"
                animate={{
                background: `radial-gradient(circle 150px at ${cursorPos.x}px ${cursorPos.y}px, rgba(8, 109, 240, 0.13), rgb(255 255 255 / 0%))`,
                    }}
                transition={{ ease: "linear", duration: 0.1 }}>   </motion.div>
            <a href={resumePDF} download="Shivam_Resume.pdf">
            Download Resume
            </a>
                <Link to="/"  className='link' >Home</Link>
                {/* {islogin && <Link to="/resumescorer" style={styles.link}>Resume Scorer</Link>} */}
                <Link to="/portfolio" className='link' >Portfolio</Link>
                <Link to="/cursorEffect" className='link' >CursorEffect</Link>
                {/* {islogin ? (
                     <Link to="#" onClick={handleLogout} style={styles.link}>
                     Logout
                 </Link>
                ) : (
                    <Link to="/login" style={styles.link}>Login</Link>
                )} */}
                {/* {!islogin && <Link to="/register" style={styles.link}>Register</Link>} */}
              
            </div>
        </nav>
    );
};

// Styles for the navbar
// const styles = {
//     navbar: {
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         padding: '10px 20px',
//         background: '#001d36',
//         //color: '#fff',
//     },
//     title: {
//         margin: 0,
//     },
//     links: {
//         display: 'flex',
//         gap: '15px',
//     },
//     link: {
//         color: '#fff',
//         textDecoration: 'none',
//     },
// };

export default Navbar;
