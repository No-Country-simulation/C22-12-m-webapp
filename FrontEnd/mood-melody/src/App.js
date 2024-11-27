import React from 'react';  
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import Header from './components/Header.js';  
import Footer from './components/Footer';  
import Login from './components/Login.js';  
import Signup from './components/Signup';  
import Playlists from './components/Playlists.js';  
import './index.css';  

const App = () => {  
    return (  
        <Router>  
            <div>  
                <Header />  
                <main>  
                    <Routes>  
                        <Route path="/" element={<Login />} />  
                        <Route path="/signup" element={<Signup />} />  
                        <Route path="/playlists" element={<Playlists />} />  
                    </Routes>  
                </main>  
                <Footer />  
            </div>  
        </Router>  
    );  
};  

export default App;