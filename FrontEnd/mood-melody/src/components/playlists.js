// src/components/App.js  
import React from 'react';  
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';  
import Header from './Header';  
import Footer from './Footer';  
import Login from './Login';  
import Register from './Signup';  
import Playlists from './Playlists';  
import '../index.css';   

const App = () => {  
    return (  
        <Router>  
            <div>  
                <Header />  
                <main>  
                    <nav className="navbar">  
                        <Link to="/">Iniciar Sesión</Link>  
                        <Link to="/signup">Registrar</Link>  
                        <Link to="/playlists">Listas de Reproducción</Link>  
                    </nav>  
                    <Routes>  
                        <Route path="/" element={<Login />} />  
                        <Route path="/signup" element={<Register />} />  
                        <Route path="/playlists" element={<Playlists />} />  
                    </Routes>  
                </main>  
                <Footer />  
            </div>  
        </Router>  
    );  
};  

export default App;