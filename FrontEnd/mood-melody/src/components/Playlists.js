// src/components/Playlists.js  
import React, { useState, useEffect } from 'react';  

const Playlists = ( {userName}) => {  
    const [playlists, setPlaylists] = useState([]);  
    const [error, setError] = useState('[]');  

    useEffect(() => {  
    const fetchPlaylists = async () => {  
        try {  
        const response = await fetch('/api/playlists'); // Asegúrate de ajustar la URL según sea necesario  
        const data = await response.json();  
        setPlaylists(data);  
        } catch (error) {  
        setError('Error al cargar las listas de reproducción: ' + error.message);  
        }  
    };  

    fetchPlaylists();  
}, []);  

return (  
    <div>  
        <h2>Mis Listas de Reproducción</h2>  
        {error && <p style={{ color: 'red' }}>{error}</p>}  
        <ul>  
        {playlists.map(playlist => (  
            <li key={playlist.id}>{playlist.name}</li>  
        ))}  
        </ul>  
    </div>  
);  
};  

export default Playlists;
