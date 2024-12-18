 // src/components/Playlists.js 
import React, { useEffect, useState } from 'react';  
import { searchPlaylists } from '../services/YouTubeService';  
import axios from 'axios';    

const Playlists = ({ playlists, favoritePlaylists, userId }) => {  
    const [activePlaylists, setActivePlaylists] = useState([]);  
    const [error, setError] = useState('');  
    const [updatedFavorites, setUpdatedFavorites] = useState(favoritePlaylists);  

    useEffect(() => {  
        const fetchUserPlaylists = async () => {  
            const userId = localStorage.getItem('userId');  
            setError('');  
            try {  
                 // Solicita las playlists asociadas al usuario desde el backend  
                const response = await axios.get(`http://localhost:8080/urls/load/${userId}`);  
                 const playlistUrls = response.data; // Aquí esperamos una lista de URLs o IDs  
                console.log('Playlists cargadas desde el servidor:', playlistUrls);  

                 // Busca información adicional de las playlists usando el servicio de YouTube  
                const results = await Promise.all(  
                    playlistUrls.map(playlistId => searchPlaylists(playlistId))  
                );  
                setActivePlaylists(results.flat());  
            } catch (error) {  
                setError('Error al cargar las listas de reproducción desde el servidor: ' + error.message);  
            }  
        };  

         if (userId) { // Verifica que el userId esté disponible antes de hacer la solicitud  
            fetchUserPlaylists();  
        }  
    }, [userId]);  

    const toggleFavorite = (playlist) => {  
        console.log('toggleFavorite called with playlist:', playlist);  
        setUpdatedFavorites((prevFavorites) => {  
            const isFavorite = prevFavorites.some(fav => fav.id.playlistId === playlist.id.playlistId);  
            let newFavorites;  

            if (isFavorite) {  
                newFavorites = prevFavorites.filter(fav => fav.id.playlistId !== playlist.id.playlistId);  
            } else {  
                newFavorites = [...prevFavorites, playlist];  
            }  

            console.log('Updated favorites:', newFavorites);  
            return newFavorites;  
        });  
    };  

    return (  
        <div>  
            {error && <p style={{ color: 'red' }}>{error}</p>}  
            <h3>Playlists Seleccionadas:</h3>  
            <ul>  
                {activePlaylists.map(playlist => (  
                    <li key={playlist.id.playlistId}>  
                        <button  
                            onClick={() => toggleFavorite(playlist)}  
                            style={{  
                                cursor: 'pointer',  
                                display: 'inline-block',  
                                marginRight: '10px',  
                                background: 'transparent',  
                                border: 'none',  
                                outline: 'none',  
                                fontSize: '28px',  
                                color: updatedFavorites.some(fav => fav.id.playlistId === playlist.id.playlistId) ? 'gold' : '#d3d3d3',  
                                transition: 'color 0.3s ease, border 0.3s ease'  
                            }}  
                        >  
                        <i className={updatedFavorites.some(fav => fav.id.playlistId === playlist.id.playlistId) ? 'fas fa-star' : 'far fa-star'}></i>  
                        </button>  
                        <a  
                            href={`https://music.youtube.com/playlist?list=${playlist.id.playlistId}`}  
                            target="_blank"  
                            rel="noopener noreferrer"  
                        >  
                            <span style={{ textDecoration: 'underline', color: 'blue' }}>  
                                {playlist.snippet.title}  
                            </span>  
                        </a>  
                    </li>  
                ))}  
            </ul>  
            <h3>Favoritas:</h3>  
            <ul>  
                {updatedFavorites.map((playlist, index) => (  
                    <li key={index}>  
                        <a  
                            href={`https://music.youtube.com/playlist?list=${playlist.id.playlistId}`}  
                            target="_blank"  
                            rel="noopener noreferrer"  
                        >  
                            {playlist.snippet.title}  
                        </a>  
                    </li>  
                ))}  
            </ul>  
        </div>  
    );  
};  

export default Playlists;
