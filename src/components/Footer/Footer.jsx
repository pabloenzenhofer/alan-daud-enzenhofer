import React from 'react';
import './Footer.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Alan Daud Enzenhofer</h3>
            <p className="footer-description">
              Soluciones contables personalizadas para empresas y profesionales.
            </p>
          </div>

          <div className="footer-section">
            <h4>Contacto</h4>
            <ul className="contact-list">
              <li>
                <FaPhone className="footer-icon" />
                <span>+54 (Tu Número)</span>
              </li>
              <li>
                <FaEnvelope className="footer-icon" />
                <span>tu@email.com</span>
              </li>
              <li>
                <FaMapMarkerAlt className="footer-icon" />
                <span>Tu Dirección, Ciudad, Provincia</span>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Enlaces Rápidos</h4>
            <ul className="quick-links">
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#sobre-mi">Sobre Mí</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Legal</h4>
            <ul className="legal-links">
              <li><a href="/privacidad">Política de Privacidad</a></li>
              <li><a href="/terminos">Términos y Condiciones</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="social-links">
            <a 
              href="https://wa.me/TUNUMERO" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link whatsapp"
            >
              <FaWhatsapp />
            </a>
            <a 
              href="https://linkedin.com/in/tu-perfil" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link linkedin"
            >
              <FaLinkedin />
            </a>
          </div>
          
          <div className="copyright">
            <p>&copy; {currentYear} Alan Daud Enzenhofer. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 