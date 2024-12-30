import React from 'react';
import './CTA.css';
import { FaWhatsapp } from 'react-icons/fa';

const CTA = () => {
  const handleCtaClick = () => {
    // Aquí puedes agregar el link a WhatsApp o al formulario
    window.open('https://wa.me/TUNUMERO', '_blank');
  };

  return (
    <section className="cta">
      <div className="cta-container">
        <div className="cta-content">
          <h2>¿Listo para optimizar tus finanzas?</h2>
          <p>Consultá sin compromiso</p>
          <button className="cta-button" onClick={handleCtaClick}>
            <FaWhatsapp className="whatsapp-icon" />
            Agendá tu consulta ahora
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA; 