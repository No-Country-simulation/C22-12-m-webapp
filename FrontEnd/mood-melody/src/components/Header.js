// src/components/Header.js  
import React, { useState } from 'react';   
import { Link } from 'react-router-dom'; 
import logo from '../images/logo.png';
import '../index.css';  

const Header = () => {  
    const [activeLink, setActiveLink] = useState('home');  

    const handleLinkClick = (link) => {  
        setActiveLink(link);  
    };  

    return (  
        <header>  
            <img className="App-logo" src={logo} alt="Logo Mood Melody" />    
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
                            Mis Moods favoritos  
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
                </ul>  
            </nav>  
        </header>  
    );  
};  

export default Header;
