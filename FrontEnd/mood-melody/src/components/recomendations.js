// src/components/Recommendations.js  
import React from 'react';  
import '../index.css';

// Componente de recomendaciones basado en el estado de ánimo  
const Recommendations = ({ mood }) => {  
    const playlists = {  
        Alegre: ['Playlist Alegre 1', 'Playlist Alegre 2'],  
        Reflexivo: ['Playlist Reflexiva 1', 'Playlist Reflexiva 2'],  
        Relajado: ['Playlist Relajada 1', 'Playlist Relajada 2'],  
        Enérgico: ['Playlist Enérgica 1', 'Playlist Enérgica 2'],  
        Romántico: ['Playlist Romántica 1', 'Playlist Romántica 2'],  
    };  

    return (  
        <div>  
            <h3>Recomendaciones para el estado de ánimo: {mood}</h3>  
            <ul>  
                {playlists[mood]?.map((playlist, index) => (  
                    <li key={index}>{playlist}</li>  
                ))}  
            </ul>  
        </div>  
    );  
};  

export default Recommendations;