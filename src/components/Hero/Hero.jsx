import React from 'react';
import './Hero.css';
// import heroImage from '../../assets/hero-image.jpg'; // Cuando tengas la imagen

const Hero = () => {
  const handleConsultaClick = () => {
    // Aquí puedes agregar el link a WhatsApp o al formulario
    window.open('https://wa.me/TUNUMERO', '_blank');
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Soluciones Contables Personalizadas para Empresas y Profesionales</h1>
        <p>Optimización fiscal, planificación financiera y gestión eficiente de tu negocio.</p>
        <button 
          className="hero-cta"
          onClick={handleConsultaClick}
        >
          Agendá una Consulta Gratis
        </button>
      </div>
      <div className="hero-image">
        {/* Cuando tengas la imagen: */}
        {/* <img src={heroImage} alt="Alan Daud Enzenhofer - Contador Público" /> */}
      </div>
    </section>
  );
};

export default Hero; 