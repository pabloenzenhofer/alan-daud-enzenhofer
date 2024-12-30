import React from 'react';
import './About.css';
import { FaLinkedin, FaGraduationCap, FaAward } from 'react-icons/fa';
// import profileImage from '../../assets/alan-profile.jpg'; // Cuando tengas la imagen

const About = () => {
  return (
    <section className="about" id="sobre-mi">
      <div className="about-container">
        <h2>Conocé a Alan Daud Enzenhofer</h2>
        
        <div className="about-content">
          <div className="about-image">
            {/* Cuando tengas la imagen: */}
            {/* <img src={profileImage} alt="Alan Daud Enzenhofer - Contador Público" /> */}
            <div className="image-placeholder">
              <FaGraduationCap className="placeholder-icon" />
            </div>
          </div>

          <div className="about-text">
            <p className="about-description">
              Soy Contador Público Nacional con más de 10 años de experiencia ayudando a empresas 
              y profesionales a optimizar su gestión financiera y cumplir con sus obligaciones fiscales.
            </p>

            <div className="credentials">
              <div className="credential-item">
                <FaGraduationCap className="credential-icon" />
                <div>
                  <h4>Formación Académica</h4>
                  <p>Contador Público Nacional - Universidad Nacional</p>
                </div>
              </div>

              <div className="credential-item">
                <FaAward className="credential-icon" />
                <div>
                  <h4>Especialización</h4>
                  <p>Planificación fiscal y contabilidad empresarial</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a 
                href="https://www.linkedin.com/in/tu-perfil" 
                target="_blank" 
                rel="noopener noreferrer"
                className="linkedin-button"
              >
                <FaLinkedin /> Conectá en LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 