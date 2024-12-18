// src/components/Home.js 
import React, { useState } from 'react';  
import PlaylistGenerator from './PlaylistGenerator';  
import Recommendations from './Recommendations';  
import Playlists from './Playlists';  
import '../index.css';

function Home() {  
    const [mood, setMood] = useState(null);  
    const userName = ''; // Asegúrate de tener el usuario definido.  
    const [selectedPlaylists, setSelectedPlaylists] = useState([]);  
    const [favoritePlaylists, setFavoritePlaylists] = useState([]);  

    const updateFavoritePlaylists = (playlist) => {  
        setFavoritePlaylists((prevFavorites) => {  
            const isFavorite = prevFavorites.some(fav => fav.id === playlist.id);  
            if (!isFavorite) {  
                return [...prevFavorites, playlist];  
            }  
            return prevFavorites;  
        });  
    };  

    return (  
        <div className="Home">  
            {!mood ? (  
                <PlaylistGenerator setMood={setMood} userName={userName} />  
            ) : (  
                <div>  
                    <h3>Tu estado de ánimo es: {mood}</h3>  
                    <Recommendations mood={mood} updateFavoritePlaylists={updateFavoritePlaylists} />  
                    {selectedPlaylists.length > 0 && (  
                        <Playlists playlists={selectedPlaylists} favoritePlaylists={favoritePlaylists} userId={userName} />  
                    )}  
                </div>  
            )}  
        </div>  
    );  
}  

export default Home;


export default Home;
