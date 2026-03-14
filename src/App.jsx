import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonial from './components/Testimonial';
import CTA from './components/CTA';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import BMICalculator from './components/BMICalculator';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="app">
      {currentPage === 'home' && (
        <>
          <Navbar />
          <Hero />
          <Features />
          <Testimonial />
          <CTA />
          <Footer />
        </>
      )}
      {currentPage === 'signup' && (
        <>
          <Navbar />
          <SignUp />
          <Footer />
        </>
      )}
      {currentPage === 'bmi' && <BMICalculator />}

      {/* Navigation buttons for testing */}
      <div style={{ position: 'fixed', bottom: 20, left: 20, zIndex: 1000 }}>
        <button
          onClick={() => setCurrentPage('home')}
          style={{
            padding: '8px 16px',
            marginRight: '8px',
            background: currentPage === 'home' ? '#AD2BEE' : '#E2E8F0',
            color: currentPage === 'home' ? '#fff' : '#0F172A',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '12px',
          }}
        >
          Home
        </button>
        <button
          onClick={() => setCurrentPage('signup')}
          style={{
            padding: '8px 16px',
            marginRight: '8px',
            background: currentPage === 'signup' ? '#AD2BEE' : '#E2E8F0',
            color: currentPage === 'signup' ? '#fff' : '#0F172A',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '12px',
          }}
        >
          Sign Up
        </button>
        <button
          onClick={() => setCurrentPage('bmi')}
          style={{
            padding: '8px 16px',
            background: currentPage === 'bmi' ? '#AD2BEE' : '#E2E8F0',
            color: currentPage === 'bmi' ? '#fff' : '#0F172A',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '12px',
          }}
        >
          BMI
        </button>
      </div>
    </div>
  );
}
