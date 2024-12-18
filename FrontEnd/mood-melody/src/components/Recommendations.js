// src/components/Recommendations.js  

import React, { useEffect, useState, useRef } from 'react';  
import axios from 'axios';  
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

const Recommendations = ({ mood, setMood, favoritePlaylists, updateFavoritePlaylists }) => {  
    const [playlists, setPlaylists] = useState([]);  
    const [selectedPlaylistId, setSelectedPlaylistId] = useState(null);  
    const playlistRef = useRef(null);  
    const API_KEY = 'AIzaSyCEZ_AQeTQhkpVaxbRYFPjwGJu_GhRcRBM';  

    useEffect(() => {  
        const playlistsData = {  
            Alegre: [  
                { id: 'PLkACGGYTqWoyhPXfo2E8G71g6hptOaOIS', img: bailar, name: 'Música para Bailar' },  
                { id: 'PL0DcLLq53pRQz4CnAGKBidMcbdFz01M4d', img: cantar, name: 'Música para Cantar' },  
            ],  
            Reflexivo: [  
                { id: 'PL6fHjaX0Ooclje9fvxYqkaOQY0c-1zFq9', img: meditar, name: 'Música para Meditar' },  
                { id: 'PLGXbBW1RbSb6ZOjXuLQw5vn4GjKVLysmb', img: pensar, name: 'Música para Pensar' },  
            ],  
            Relajado: [  
                { id: 'PLFkFWNNdeltfZ38bmM8sSGLE4WHoIPgX5', img: descansar, name: 'Música para Dormir' },  
                { id: 'PLxqNgpRa5XmcRoRvvMQ9zSge_je8G_UlU', img: leer, name: 'Música para Leer' },  
            ],  
            Romántico: [  
                { id: 'PLJmzdqLGl_E7CbbYpSgH3Gi-rZyvgxr-6', img: moderna, name: 'Música Moderna' },  
                { id: 'PLpdv1ogslIzoQrQNpDcbPnoKHn4kW4Tgi', img: recuerdo, name: 'Música del Recuerdo' },  
            ],  
            Enérgico: [  
                { id: 'PLG1p4ZV6cRjAVHe5HlJILpXOf2f7ncOch', img: deporte, name: 'Música para Hacer Deporte' },  
                { id: 'PLLo5K0PbYuJnFan_-5ixTlKs_CUpUllGp', img: activar, name: 'Música para Activarte' },  
            ],  
        };  

        const fetchPlaylists = async () => {  
            if (mood) {  
                try {  
                    const promises = playlistsData[mood].map(playlist =>  
                        axios.get(`https://www.googleapis.com/youtube/v3/playlists?part=snippet&id=${playlist.id}&key=${API_KEY}`)  
                    );  

                    const responses = await Promise.all(promises);   
                    
                    const fetchedPlaylists = responses.map(response => ({  
                        id: response.data.items[0].id,  
                        img: playlistsData[mood].find(p => p.id === response.data.items[0].id).img, // Mapea la imagen  
                        name: response.data.items[0].snippet.title, // Obtén el título de la API  
                    }));  

                    setPlaylists(fetchedPlaylists);  
                } catch (error) {  
                    console.error("Error al obtener las playlists: ", error);  
                }  
            } else {  
                setPlaylists([]); // Limpia las playlists si no hay estado de ánimo  
            }  
        };  

        fetchPlaylists();  
    }, [mood, API_KEY]);  

    const handlePlaylistSelect = (id) => {  
        setSelectedPlaylistId(id);  
        if (playlistRef.current) {  
            playlistRef.current.scrollIntoView({ behavior: 'smooth' });  
        }  
    };  

    const handleAddToFavorites = (playlist) => {  
        updateFavoritePlaylists(playlist);  
    };  

    const handleAddToMoodFavorites = async (playlist) => {  
        const userId = localStorage.getItem('userId');  

        try {  
            if (!userId) {  
                alert('No se encontró el ID del usuario. Por favor, inicie sesión.');  
                throw new Error('No se encontró el ID del usuario. Por favor, inicie sesión.');  
            }  

            const dataToSend = {  
                userId: userId,  
                url: `https://www.youtube.com/playlist?list=${playlist.id}`,  
            };  

            await axios.post('http://localhost:8080/urls/save', dataToSend);  

            console.log('URL guardada exitosamente.');  
        } catch (error) {  
            console.error('Error al guardar la URL:', error);  
        }  
    };  

    return (  
        <div>  
            <h3>Recomendaciones para tu estado de ánimo: {mood || 'Ninguno'}</h3>  
            <ul className="playlist-list">  
                {playlists.map((playlist, index) => (  
                    <li key={index} className="playlist-item">  
                        <a onClick={() => handlePlaylistSelect(playlist.id)} style={{ cursor: 'pointer' }}>  
                            <img  
                                src={playlist.img}  
                                alt={playlist.name}  
                                className="playlist-image"  
                            />  
                            <span className="playlist-name">{playlist.name}</span>  
                        </a>  
                        <div  
                            className={`star ${favoritePlaylists && favoritePlaylists.some(fav => fav.id === playlist.id) ? 'fav' : ''}`}  
                            onClick={() => handleAddToMoodFavorites(playlist)}  
                            role="button"  
                            tabIndex={0}  
                        >  
                            {favoritePlaylists && favoritePlaylists.some(fav => fav.id === playlist.id) ? '★' : '☆'}  
                        </div>  
                    </li>  
                ))}  
            </ul>  
            {selectedPlaylistId && (  
                <div style={{ marginTop: '20px' }} ref={playlistRef}>  
                    <h4>Reproduciendo Playlist:</h4>  
                    <iframe  
                        title="YouTube Playlist"  
                        width="100%"  
                        height="500"  
                        src={`https://www.youtube.com/embed/videoseries?list=${selectedPlaylistId}&autoplay=1`}  
                        frameBorder="0"  
                        allowFullScreen  
                        style={{  
                            display: 'block',  
                            margin: 'auto',  
                        }}  
                    />  
                </div>  
            )}  
        </div>  
    );  
};  

export default Recommendations;
