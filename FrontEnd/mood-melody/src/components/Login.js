import React, { useState } from 'react';   
import 'bootstrap/dist/css/bootstrap.min.css';  
import '../index.css';  
import { useNavigate } from 'react-router-dom';  
import Register from './Signup'; 

const Login = () => {  
    // Definición del estado local  
    const [formData, setFormData] = useState({  
        email: '',  
        password: ''  
    });  
    const [loading, setLoading] = useState(false);  
    const [error, setError] = useState('');   
    const navigate = useNavigate();  

    const handleChange = (e) => {  
        const { name, value } = e.target;  
        setFormData({ ...formData, [name]: value });  
    };  

    const handleSubmit = async (e) => {  
        e.preventDefault();  
        setLoading(true);  
        setError('');   

        try {  
            const response = await fetch('http://localhost:8080/api/Login', {  
                method: 'POST',  
                headers: {  
                    'Content-Type': 'application/json',  
                },  
                body: JSON.stringify(formData),  
            });  

            const result = await response.json();  

            if (!response.ok) {  
                throw new Error(result.message || 'Error en el inicio de sesión');  
            }  

            localStorage.setItem('token', result.token);   

            alert(result.message); // Muestra un mensaje de éxito   
            navigate("/"); // Redirecciona a la página de inicio usando navigate  
            alert(result.message);   
            navigate("/");  
        } catch (error) {  
            setError(error.message);  
        } finally {  
            setLoading(false);   
        }  
    };  

    return (  
        <div className="container">  
            <h2 className="text-center mt-5">Iniciar Sesión</h2>  
            <form onSubmit={handleSubmit} className="mt-4 shadow-lg rounded p-4 bg-light">  
                {error && <div className="alert alert-danger">{error}</div>}  
                <div className="mb-3">  
                    <input  
                        type="email"  
                        name="email"  
                        className="form-control"  
                        placeholder="Correo electrónico"  
                        value={formData.email}  
                        onChange={handleChange}  
                        required  
                    />  
                </div>  
                <div className="mb-3">  
                    <input  
                        type="password"  
                        name="password"  
                        className="form-control"  
                        placeholder="Contraseña"  
                        value={formData.password}  
                        onChange={handleChange}  
                        required  
                    />  
                </div>  
                <div className="mb-3 form-check">  
                    <input  
                        type="checkbox"  
                        className="form-check-input"  
                        id="rememberMe"  
                    />  
                    <label className="form-check-label" htmlFor="rememberMe">Recordarme</label>  
                </div>  
                <button type="submit" className="btn btn-success w-100" disabled={loading}>  
                    {loading ? 'Cargando...' : 'Iniciar sesión'}  
                </button>  

                <div className="mt-3 text-center">  
                    <p>¿No tienes cuenta? <a href="/Signup">Créala aquí</a>.</p>  
                </div>  
            </form>  
        </div>  
    );  
};  

export default Login;
