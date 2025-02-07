import React from 'react';
import Register from './Register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './navbar';
import Portfolio from './portfolio';
import HomePage from './Home';
import ResumeScorer from './resumeScorer';
import Login from './Login';
import Footer from './footer';
import CursorSpotlight from './cursorEffect';


function App() {

  return (
     <Router>
     <div>
         <Navbar />
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resumescorer" element={<ResumeScorer />} />
            <Route path="/login" element={<Login />} />
            <Route path = "/cursorEffect" element={<CursorSpotlight/>}/>
         </Routes>
         <Footer/>
     </div>
 </Router>

  );
}

export default App;

