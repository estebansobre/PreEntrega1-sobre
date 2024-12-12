// src/App.js
import React from 'react';
import NavBar from './NavBar'; // Importamos NavBar
import ItemListContainer from './ItemListContainer'; // Importamos ItemListContainer

const App = () => {
  return (
    <div>
      <NavBar /> {/* Mostramos la barra de navegación */}
      <ItemListContainer greeting="¡Bienvenido a Vino Deluxe!" /> {/* Mostramos el saludo */}
    </div>
  );
};

export default App;
