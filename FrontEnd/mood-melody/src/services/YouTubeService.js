// src/services/YouTubeService.js  
import axios from 'axios';  

const API_KEY = 'AIzaSyCEZ_AQeTQhkpVaxbRYFPjwGJu_GhRcRBM'; 
const BASE_URL = 'https://www.googleapis.com/youtube/v3';  

// Busca playlists relacionadas con un término  
export const searchPlaylists = async (query) => {  
    try {  
        const response = await axios.get(`${BASE_URL}/search`, {  
            params: {  
                part: 'snippet',  
                type: 'playlist',  
                q: query,  
                key: API_KEY,  
            },  
        });  
        return response.data.items; // Retorna los elementos encontrados  
    } catch (error) {  
        console.error('Error buscando playlists:', error);  
        throw error; // Lanza el error para manejarlo más tarde  
    }  
};  

// Obtiene los elementos de una playlist específica  
export const getPlaylistItems = async (playlistId) => {  
    try {  
        const response = await axios.get(`${BASE_URL}/playlistItems`, {  
            params: {  
                part: 'snippet',  
                playlistId: playlistId,  
                maxResults: 10,  
                key: API_KEY,  
            },  
        });  
        return response.data.items; // Retorna los elementos de la playlist  
    } catch (error) {  
        console.error('Error obteniendo elementos de la playlist:', error);  
        throw error; // Lanza el error para manejarlo más tarde  
    }  
};
