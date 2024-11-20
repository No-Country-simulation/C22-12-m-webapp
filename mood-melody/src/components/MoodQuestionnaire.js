import React, { useState } from 'react';  

const moods = [  
    "Alegre",  
    "Reflexivo",  
    "Relajado",  
    "Eufórico",  
    "Romántico",  
];  

const MoodQuestionnaire = ({ setMood }) => {  
    const [selectedMood, setSelectedMood] = useState('');  

    const handleSubmit = (event) => {  
    event.preventDefault();  
    setMood(selectedMood);  
    };  

    return (  
    <form onSubmit={handleSubmit}>  
        <h3>¿Cuál es tu estado emocional actual?</h3>  
        {moods.map((mood, index) => (  
        <div key={index}>  
            <input  
            type="radio"  
            value={mood}  
            onChange={(e) => setSelectedMood(e.target.value)}  
            />  
            {mood}  
        </div>  
        ))}  
        <button type="submit">Enviar</button>  
    </form>  
    );  
};  

export default MoodQuestionnaire;