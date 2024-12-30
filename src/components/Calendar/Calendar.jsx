import React, { useState } from 'react';
import './Calendar.css';
import { FaCalendarAlt, FaDownload, FaSync } from 'react-icons/fa';

const Calendar = () => {
  const [activeTab, setActiveTab] = useState('mensual');

  const monthlyDates = [
    {
      title: 'Monotributo',
      date: '20 de cada mes',
      description: 'Vencimiento del pago mensual'
    },
    {
      title: 'IVA',
      date: 'Según terminación de CUIT',
      description: 'Presentación y pago mensual'
    },
    {
      title: 'Autónomos',
      date: '5 al 7 de cada mes',
      description: 'Vencimiento del pago mensual'
    }
  ];

  const annualDates = [
    {
      title: 'Ganancias Personas Físicas',
      date: '15 de junio',
      description: 'Presentación de DDJJ y pago anual'
    },
    {
      title: 'Bienes Personales',
      date: '15 de junio',
      description: 'Presentación de DDJJ y pago anual'
    },
    {
      title: 'Ganancias Sociedades',
      date: '5° mes posterior al cierre',
      description: 'Presentación de DDJJ y pago anual'
    }
  ];

  const handleDownloadCalendar = () => {
    // Aquí iría la lógica para descargar el PDF
    console.log('Descargando calendario...');
  };

  const handleSyncCalendar = () => {
    // Aquí iría la lógica para sincronizar con Google Calendar
    window.open('TU_LINK_DE_GOOGLE_CALENDAR', '_blank');
  };

  return (
    <section className="calendar" id="calendario">
      <div className="calendar-container">
        <h2>
          <FaCalendarAlt className="calendar-title-icon" />
          Calendario Fiscal Actualizado
        </h2>
        
        <div className="calendar-tabs">
          <button 
            className={`tab-button ${activeTab === 'mensual' ? 'active' : ''}`}
            onClick={() => setActiveTab('mensual')}
          >
            Vencimientos Mensuales
          </button>
          <button 
            className={`tab-button ${activeTab === 'anual' ? 'active' : ''}`}
            onClick={() => setActiveTab('anual')}
          >
            Vencimientos Anuales
          </button>
        </div>

        <div className="calendar-content">
          {activeTab === 'mensual' ? (
            <div className="dates-grid">
              {monthlyDates.map((item, index) => (
                <div className="date-card" key={index}>
                  <h3>{item.title}</h3>
                  <div className="date">{item.date}</div>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="dates-grid">
              {annualDates.map((item, index) => (
                <div className="date-card" key={index}>
                  <h3>{item.title}</h3>
                  <div className="date">{item.date}</div>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="calendar-actions">
          <button className="action-button download" onClick={handleDownloadCalendar}>
            <FaDownload /> Descargar Calendario Completo
          </button>
          <button className="action-button sync" onClick={handleSyncCalendar}>
            <FaSync /> Sincronizar con Google Calendar
          </button>
        </div>
      </div>
    </section>
  );
};

export default Calendar; 