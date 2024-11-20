import React, { useState } from 'react';  
import Recommendations from './components/Recommendations';  
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';  
import './App.css';  
import logo from './images/logo.png';  
import happyImg from './images/happy.png';
import reflectiveImg from './images/reflective.png';
import relaxedImg from './images/relaxed.png';
import energeticImg from './images/energetic.png';
import romanticImg from './images/romantic.png';


// Componente para seleccionar el estado de ánimo  
const PlaylistGenerator = ({ setMood, userName }) => { 
    // Lista de estados de ánimo con imágenes  
    const moods = [  
        { name: 'Alegre', img: happyImg },  
        { name: 'Reflexivo', img:reflectiveImg },  
        { name: 'Relajado', img: relaxedImg },  
        { name: 'Enérgico', img: energeticImg },  
        { name: 'Romántico', img: romanticImg }  
    ];  

    return (  
        <div>  
            <h2>Bienvenido {userName}</h2> {/* Asegúrate de recibir userName aquí */}  
            <h3>¿Cómo te sientes hoy?</h3> 
            <section>  
                {moods.map((mood) => (  
                    <img   
                        key={mood.name}   
                        src={mood.img}   
                        alt={mood.name}   
                        onClick={() => setMood(mood.name)}  
                    />  
                ))}  
            </section> 
        </div>  
    );  
};  

function App() {  
    const [mood, setMood] = useState(null);    
    const userName = 'Usuario';

    return (  
        <Router> 
            <div className="App">  
                <header className="App-header">  
                    <img src={logo} className="App-logo" alt="logo" />  
                    <h1>MoodMelody</h1>  

                    {!mood ? (  
                        <PlaylistGenerator setMood={setMood} userName={userName} />  
                    ) : (  
                        <div>  
                            <h3>Tu estado de ánimo es: {mood}</h3>  
                            <Link to="/recommendations">   
                                <button>  
                                    Obtener recomendación de playlist  
                                </button>  
                            </Link>  
                        </div>  
                    )}  
                </header>  

                <Routes>  
                    <Route path="/recommendations" element={<Recommendations mood={mood} />} /> 
                </Routes>  
            </div>  
        </Router>  
    );  
}  

export default App;