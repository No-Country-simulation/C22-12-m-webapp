// src/index.js  
import React from 'react';  
import ReactDOM from 'react-dom/client';  
import './index.css';  
import App from './App';  
import reportWebVitals from './reportWebVitals';  

class ErrorBoundary extends React.Component {  
    constructor(props) {  
        super(props);  
        this.state = { hasError: false };  
    }  

    static getDerivedStateFromError(error) {  
        return { hasError: true };  
    }  

    componentDidCatch(error, info) {  
        console.error("Error capturado en ErrorBoundary: ", error, info);  
    }  

    render() {  
        if (this.state.hasError) {  
            return <h1>Algo salió mal. Por favor, intente de nuevo más tarde.</h1>;  
        }  

        return this.props.children;   
    }  
}  

const root = ReactDOM.createRoot(document.getElementById('root'));  
root.render(  
  <React.StrictMode>  
    <ErrorBoundary>  
      <App />  
    </ErrorBoundary>  
  </React.StrictMode>  
);  

reportWebVitals();