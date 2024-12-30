import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import About from './components/About/About';
import Calendar from './components/Calendar/Calendar';
import CTA from './components/CTA/CTA';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Services />
      <About />
      <Calendar />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}

export default App; 