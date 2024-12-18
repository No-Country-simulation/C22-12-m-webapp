// src/App.js 
import React, { useState } from 'react';  
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';  
import Header from './components/Header.js';  
import Footer from './components/Footer.js';  
import Login from './components/Login.js';  
import Signup from './components/Signup.js';  
import Playlists from './components/Playlists.js';  
import Home from './components/Home.js';  
import Recommendations from './components/Recommendations.js';  
import './index.css';  

const App = () => {  
    // Estado para manejar el estado de ánimo y las playlists favoritas  
    const [mood, setMood] = useState(''); // Valor inicial vacío  
    const [favoritePlaylists, setFavoritePlaylists] = useState([]);  

    const updateFavoritePlaylists = (playlist) => {  
        setFavoritePlaylists((prevFavorites) => {  
            if (prevFavorites.some((fav) => fav.id === playlist.id)) {  
                // Eliminamos si ya está en favoritos  
                return prevFavorites.filter((fav) => fav.id !== playlist.id);  
            } else {  
                // Agregamos si no está  
                return [...prevFavorites, playlist];  
            }  
        });  
    };  

    return (  
        <Router>  
            <div>  
                <Header />  
                <main>  
                    <Routes>  
                        <Route path="/" element={<Navigate to="/Home" replace />} />  
                        <Route path="/Signup" element={<Signup />} />  
                        <Route path="/playlists" element={<Playlists playlists={[]} favoritePlaylists={[]} userId={1} />} /> 
                        <Route path="/Login" element={<Login />} />  
                        <Route path="/Home" element={<Home />} />  
                        <Route path="/Recommendations" element={  
                            <Recommendations  
                                mood={mood}   // Pasamos el estado de ánimo  
                                setMood={setMood} // Pasamos la función para actualizar el estado de ánimo  
                                favoritePlaylists={favoritePlaylists} // Pasamos el estado de favoritos  
                                updateFavoritePlaylists={updateFavoritePlaylists} // Pasamos la función para actualizar  
                            />  
                        } />  
                    </Routes>  
                </main>  
                <Footer />  
            </div>  
        </Router>  
    );  
};  

export default App;
