import React from 'react';  
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';  
import Header from './components/Header.js';  
import Footer from './components/Footer';  
import Login from './components/Login.js';  
import Signup from './components/Signup';  
import Playlists from './components/Playlists.js';   
import Home from './components/Home.js';  
import Recommendations from './components/Recommendations.js';  
import './index.css';  

const App = () => {  
    return (  
        <Router>  
            <div>  
                <Header />  
                <main>  
                    <Routes>  
                        <Route path="/" element={<Navigate to="/Home" replace />} />  
                        <Route path="/Signup" element={<Signup />} />  
                        <Route path="/Playlists" element={<Playlists />} />  
                        <Route path="/Login" element={<Login />} />  
                        <Route path="/Home" element={<Home />} />  
                        <Route path="/Recommendations" element={<Recommendations />} />  
                    </Routes>  
                </main>  
                <Footer />  
            </div>  
        </Router>  
    );  
};  

export default App;
