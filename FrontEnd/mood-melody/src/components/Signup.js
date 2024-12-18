// src/components/Signup.js    
import React, { useState } from 'react';     
import '../index.css';   

const Signup = () => {  
    const [formData, setFormData] = useState({  
        nombre: '',         
        apodo: '',      
        apellido: '',           
        edad: '',           
        email: '',           
        contraseña: '',       
        repetirContraseña: ''   
    });  
    const [loading, setLoading] = useState(false);  
    const [error, setError] = useState('');  

    const handleChange = (e) => {  
        const { name, value } = e.target;  
        setFormData({ ...formData, [name]: value });  
    };  

    const handleSubmit = async (e) => {  
        e.preventDefault();  
        setLoading(true);  
        setError('');   

        // Validación de contraseñas  
        if (formData.contraseña !== formData.repetirContraseña) {  
            setError('Las contraseñas no coinciden');  
            setLoading(false);  
            return;  
        }  

        // Construcción del objeto JSON para enviar al backend  
        const payload = {   
            name: formData.nombre,         
            nickname: formData.apodo,     
            lastname: formData.apellido,    
            age: parseInt(formData.edad, 10),  // Convertir edad a número     
            email: formData.email,         
            password: formData.contraseña  
        };  

        try {  
            const response = await fetch('http://localhost:8080/user/register', {  
                method: 'POST',  
                headers: {  
                    'Content-Type': 'application/json',  
                },  
                body: JSON.stringify(payload),  
            });  

            // Verifica respuesta y procesa el resultado  
            const result = await response.json();  

            if (!response.ok) {  
                throw new Error(result.message || 'Error en el registro');  
            }  
            
            // Si el registro es exitoso, almacenar un token si se devuelve  
            if (result.token) {  
                localStorage.setItem('authToken', result.token);   
            }  

            alert(result.message);    

            // Limpia los campos después de un registro exitoso  
            setFormData({ nombre: '', apellido: '', apodo: '', email: '', edad: '', contraseña: '', repetirContraseña: '' });  
            window.location.href = '/login'; // Redirecciona a la página de login   
            
        } catch (error) {  
            setError(error.message);  
        } finally {  
            setLoading(false);  
        }  
    };  

    return (  
        <form onSubmit={handleSubmit} className="mt-4 p-4 bg-light shadow-lg rounded">  
            {error && <div className="alert alert-danger">{error}</div>}  
            <div className="mb-3">  
                <label htmlFor="nombre" className="form-label">Nombre</label>  
                <input   
                    type="text"   
                    name="nombre"   
                    id="nombre"  
                    placeholder="Nombre"   
                    onChange={handleChange}   
                    value={formData.nombre}  
                    required   
                    className="form-control"  
                />  
            </div>  
            <div className="mb-3">  
                <label htmlFor="apellido" className="form-label">Apellido</label>  
                <input   
                    type="text"   
                    name="apellido"   
                    id="apellido"  
                    placeholder="Apellido"   
                    onChange={handleChange}   
                    value={formData.apellido}  
                    required   
                    className="form-control"  
                />  
            </div>  
            <div className="mb-3">  
                <label htmlFor="apodo" className="form-label">Apodo</label>  
                <input   
                    type="text"   
                    name="apodo"   
                    id="apodo"  
                    placeholder="Apodo"   
                    onChange={handleChange}   
                    value={formData.apodo}  
                    required   
                    className="form-control"  
                />  
            </div>  
            <div className="mb-3">  
                <label htmlFor="email" className="form-label">Correo electrónico</label>  
                <input   
                    type="email"   
                    name="email"   
                    id="email"  
                    placeholder="Correo electrónico"   
                    onChange={handleChange}   
                    value={formData.email}  
                    required   
                    className="form-control"  
                />  
            </div>  
            <div className="mb-3">  
                <label htmlFor="edad" className="form-label">Edad</label>  
                <input   
                    type="number"   
                    name="edad"   
                    id="edad"  
                    placeholder="Edad"   
                    onChange={handleChange}   
                    value={formData.edad}  
                    required   
                    className="form-control"  
                    min="0"    
                />  
            </div>  
            <div className="mb-3">  
                <label htmlFor="contraseña" className="form-label">Contraseña</label>  
                <input   
                    type="password"   
                    name="contraseña"   
                    id="contraseña"  
                    placeholder="Contraseña"   
                    onChange={handleChange}   
                    value={formData.contraseña}  
                    required   
                    className="form-control"  
                />  
            </div>  
            <div className="mb-3">  
                <label htmlFor="repetirContraseña" className="form-label">Repetir contraseña</label>  
                <input   
                    type="password"   
                    name="repetirContraseña"   
                    id="repetirContraseña"  
                    placeholder="Repetir contraseña"   
                    onChange={handleChange}   
                    value={formData.repetirContraseña}  
                    required   
                    className="form-control"  
                />  
            </div>  
            <button type="submit" disabled={loading} className="btn btn-primary w-100">   
                {loading ? 'Cargando...' : 'Registrarse'}  
            </button>  
        </form>  
    );  
};  

export default Signup;
export default Signup;
