import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';// los estilos son lo unico que se importa directamente
import App from './App';// importo otro componente
// la estructura de lo que si importa es la siguiente
//primero escribo import
//segundo el nombre de lo que necesito 
//tercero escribo from(desde donde)
//cuarto escribo la ruta de lo q necesito

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
//todo lo que se necesite se importa y se exporta