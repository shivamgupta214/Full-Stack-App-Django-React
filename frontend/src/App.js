import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Register from './login_page';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './navbar';
import Portfolio from './portfolio';
import HomePage from './Home';
import ResumeScorer from './resumeScorer';


function App() {

  return (
     <Router>
     <div>
         <Navbar />
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Register />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resumescorer" element={<ResumeScorer />} />
         </Routes>
     </div>
 </Router>

  );
}

export default App;

