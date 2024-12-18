// src/components/PlaylistGenerator.js 
import React from 'react'; 
import happyImg from '../images/happy.png';  
import reflectiveImg from '../images/reflective.png';  
import relaxedImg from '../images/relaxed.png';  
import energeticImg from '../images/energetic.png';  
import romanticImg from '../images/romantic.png';
import '../index.css';

const PlaylistGenerator = ({ setMood, userName }) => {  
    const moods = [
        { name: 'Alegre', img: happyImg },
        { name: 'Reflexivo', img: reflectiveImg },
        { name: 'Relajado', img: relaxedImg },
        { name: 'Enérgico', img: energeticImg },
        { name: 'Romántico', img: romanticImg }
    ];  

    return (  
        <div>  
            <h2>¡Bienvenido {userName}!</h2>  
            <h3>¿Cómo te sientes hoy?</h3>  
            <section>  
                {moods.map((mood) => (  
                    <img  
                        key={mood.name}  
                        src={mood.img}  
                        alt={mood.name}  
                        onClick={() => setMood(mood.name)}  
                        tabIndex={0}  
                        onKeyPress={(e) => (e.key === 'Enter' ? setMood(mood.name) : null)}  
                    />  
                ))}  
            </section>  
        </div>  
    );  
};  

export default PlaylistGenerator;
