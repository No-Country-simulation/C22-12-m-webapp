// src/components/Header.js  
import React, { useState } from 'react';   
import { Link } from 'react-router-dom'; 
import '../index.css';  

const Header = () => {  
    const [activeLink, setActiveLink] = useState('home');  

    const handleLinkClick = (link) => {  
        setActiveLink(link);  
    };  

    return (  
        <header>  
            <img className="App-logo" src={`../images/logo.png`} alt="Logo Mood Melody" />    
            <nav>  
                <ul>  
                    <li>  
                        <Link   
                            to="/"  
                            onClick={() => handleLinkClick('home')}  
                            className={activeLink === 'home' ? 'active' : ''}  
                        >  
                            Home  
                        </Link>  
                    </li>  
                    <li>  
                        <Link   
                            to="/playlists"    
                            onClick={() => handleLinkClick('playlists')}  
                            className={activeLink === 'playlists' ? 'active' : ''}  
                        >  
                            Listas de Reproducción  
                        </Link>  
                    </li>  
                    <li>  
                        <Link   
                            to="/login"    
                            onClick={() => handleLinkClick('login')}  
                            className={activeLink === 'login' ? 'active' : ''}  
                        >  
                            Iniciar Sesión  
                        </Link>  
                    </li>  
                    <li>  
                        <Link   
                            to="/signup"    
                            onClick={() => handleLinkClick('signup')}  
                            className={activeLink === 'signup' ? 'active' : ''}  
                        >  
                            Registrar  
                        </Link>  
                    </li>  
                </ul>  
            </nav>  
        </header>  
    );  
};  

export default Header;