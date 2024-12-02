import React, { useState } from 'react';  
import Recommendations from './Recommendations';  
import happyImg from '../images/happy.png';  
import reflectiveImg from '../images/reflective.png';  
import relaxedImg from '../images/relaxed.png';  
import energeticImg from '../images/energetic.png';  
import romanticImg from '../images/romantic.png';
import '../index.css';

function PlaylistGenerator({ setMood, userName }) {
    const moods = [
        { name: 'Alegre', img: happyImg },
        { name: 'Reflexivo', img: reflectiveImg },
        { name: 'Relajado', img: relaxedImg },
        { name: 'Enérgico', img: energeticImg },
        { name: 'Romántico', img: romanticImg }
    ];

    return (
        <div>
            <h2>¡Bienvenido, {userName}!</h2>
            <h3>¿Cómo te sientes hoy?</h3>
            <section>
                {moods.map((mood) => (
                    <img
                        key={mood.name}
                        src={mood.img}
                        alt={mood.name}
                        onClick={() => setMood(mood.name)}
                        tabIndex={0}
                        onKeyPress={(e) => (e.key === 'Enter' ? setMood(mood.name) : null)} />
                ))}
            </section>
        </div>
    );
}  

function Home() {  
    const [mood, setMood] = useState(null);    
    const userName = 'Usuario';  

    return (  
        <div className="Home">  
            {!mood ? (  
                <PlaylistGenerator setMood={setMood} userName={userName} />  
            ) : (  
                <div>  
                    <h3>Tu estado de ánimo es: {mood}</h3>  
                    <Recommendations mood={mood} />  
                </div>  
            )}  
        </div>  
    );  
}  

export default Home;
