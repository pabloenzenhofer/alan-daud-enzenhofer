import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Alan Daud Enzenhofer</h1>
      </div>
      <nav className="nav-menu">
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#sobre-mi">Sobre mí</a></li>
          <li><a href="#testimonios">Testimonios</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
      <button className="cta-button">Solicitar Consulta</button>
    </header>
  );
};

export default Header; 