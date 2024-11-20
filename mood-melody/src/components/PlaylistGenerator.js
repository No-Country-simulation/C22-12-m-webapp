import React, { useState } from 'react';  
import MoodQuestionnaire from './MoodQuestionnaire';  

const PlaylistGenerator = () => {  
    const [mood, setMood] = useState(null);  

    return (  
    <div>  
    <h2>Generador de Playlist</h2>  
    {!mood ? (  
        <MoodQuestionnaire setMood={setMood} />  
    ) : (  
        <div>  
        <h3>Tu estado de ánimo es: {mood}</h3>  
        <h4>Recomendación: ...</h4>  
          {/* Aquí podrías hacer una llamada a la API para obtener las playlists */}  
        </div>  
    )}  
    </div>  
);  
};  

export default PlaylistGenerator;