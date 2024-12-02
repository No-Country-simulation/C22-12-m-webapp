// src/components/Recommendations.js  
import React from 'react';  
import '../index.css';   
import bailar from '../images/bailar.png';   
import cantar from '../images/cantar.png';   
import meditar from '../images/meditar.png';   
import pensar from '../images/pensar.png';  
import descansar from '../images/descansar.png';  
import leer from '../images/leer.png';  
import moderna from '../images/moderna.png';  
import recuerdo from '../images/recuerdo.png';  
import deporte from '../images/deporte.png';  
import activar from '../images/activar.png';  

// Componente de recomendaciones basado en el estado de ánimo  
const Recommendations = ({ mood }) => {  
    // Cada estado de ánimo tiene sus respectivas playlists y descripciones  
    const Playlists = {  
        Alegre: [  
            { name: 'Música para Bailar', img: bailar, link: '/playlists/musica-bailar' },  
            { name: 'Música para Cantar', img: cantar, link: '/playlists/musica-cantar' },  
        ],  
        Reflexivo: [  
            { name: 'Música para Meditar', img: meditar, link: '/playlists/musica-meditar' },  
            { name: 'Música para Pensar', img: pensar, link: '/playlists/musica-pensar' },  
        ],  
        Relajado: [  
            { name: 'Música para Descansar', img: descansar, link: '/playlists/musica-descansar' },  
            { name: 'Música para Leer', img: leer, link: '/playlists/musica-leer' },  
        ],  
        Romántico: [  
            { name: 'Música Moderna', img: moderna, link: '/playlists/musica-moderna' },  
            { name: 'Música del Recuerdo', img: recuerdo, link: '/playlists/musica-recuerdo' },  
        ],  
        Enérgico: [  
            { name: 'Música para Hacer Deporte', img: deporte, link: '/playlists/musica-deporte' },  
            { name: 'Música para Activarte', img: activar, link: '/playlists/musica-activarte' },  
        ],  
    };  

    const backgroundClass = mood.toLowerCase();  
    
    return (  
        <div className={backgroundClass}>  
            <h3>Recomendaciones para el estado de ánimo: {mood}</h3>  
            <ul className="playlist-list">  
                {playlists[mood]?.map((playlist, index) => (  
                    <li key={index} className="playlist-item">  
                        <a href={playlist.link}>   
                            <img src={playlist.img} alt={playlist.name} className="playlist-image" />  
                            <span className="playlist-name">{playlist.name}</span>  
                        </a>  
                    </li>  
                ))}  
            </ul>  
        </div>  
    );  
};  

export default Recommendations;
