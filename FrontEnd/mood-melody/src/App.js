import React from 'react';  
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';  
import Header from './components/Header.js';  
import Footer from './components/Footer';  
import Login from './components/Login.js';  
import Signup from './components/Signup';  
import Playlists from './components/Playlists.js';   
import Home from './components/Home.js';  
import Recomendations from './components/Recomendations.js';  
import './index.css';  

const App = () => {  
    return (  
        <Router>  
            <div>  
                <Header />  
                <main>  
                    <Routes>  
                        <Route path="/" element={<Navigate to="/home" replace />} />  
                        <Route path="/signup" element={<Signup />} />  
                        <Route path="/playlists" element={<Playlists />} />  
                        <Route path="/login" element={<Login />} />  
                        <Route path="/home" element={<Home />} />  
                        <Route path="/recomendations" element={<Recomendations />} />  
                    </Routes>  
                </main>  
                <Footer />  
            </div>  
        </Router>  
    );  
};  

export default App;