import React from 'react';
import './Services.css';
import { 
  FaCalculator, 
  FaChartLine, 
  FaFileInvoiceDollar, 
  FaUsers, 
  FaPiggyBank,
  FaLandmark 
} from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaCalculator />,
      title: "Asesoramiento Impositivo",
      description: "Planificación fiscal estratégica, liquidación de impuestos y cumplimiento de todas tus obligaciones tributarias de manera eficiente.",
      features: [
        "Planificación fiscal personalizada",
        "Liquidación de impuestos",
        "Asesoramiento tributario continuo"
      ]
    },
    {
      icon: <FaChartLine />,
      title: "Gestión Contable",
      description: "Servicios contables integrales incluyendo balances, auditorías y análisis financieros personalizados para empresas.",
      features: [
        "Balances y estados contables",
        "Auditorías financieras",
        "Análisis de costos y rentabilidad"
      ]
    },
    {
      icon: <FaFileInvoiceDollar />,
      title: "Trámites para Autónomos",
      description: "Gestión completa para profesionales independientes, incluyendo alta de monotributo y presentación de declaraciones juradas.",
      features: [
        "Alta y recategorización de monotributo",
        "Declaraciones juradas",
        "Asesoramiento personalizado"
      ]
    },
    {
      icon: <FaUsers />,
      title: "Liquidación de Sueldos",
      description: "Servicio integral de gestión de nóminas y liquidación de sueldos para pequeñas y medianas empresas.",
      features: [
        "Liquidación mensual de sueldos",
        "Gestión de cargas sociales",
        "Asesoramiento laboral"
      ]
    },
    {
      icon: <FaPiggyBank />,
      title: "Planificación Financiera",
      description: "Desarrollo de estrategias financieras para maximizar la rentabilidad de tu negocio y optimizar costos operativos.",
      features: [
        "Optimización de recursos",
        "Análisis de inversiones",
        "Gestión de flujo de caja"
      ]
    },
    {
      icon: <FaLandmark />,
      title: "Contabilidad de Comunas",
      description: "Gestión contable y fiscal especializada para comunas de Entre Ríos, con atención específica a las normativas locales.",
      features: [
        "Gestión contable municipal",
        "Cumplimiento normativo local",
        "Asesoramiento especializado"
      ]
    }
  ];

  return (
    <section className="services" id="servicios">
      <div className="services-container">
        <h2>Servicios Profesionales</h2>
        <p className="services-subtitle">
          Soluciones contables integrales para tu tranquilidad financiera
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 