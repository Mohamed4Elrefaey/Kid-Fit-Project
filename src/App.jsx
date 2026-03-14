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
  const [userData, setUserData] = useState(null);

  const handleSignUpComplete = (data) => {
    setUserData(data);
    setCurrentPage('bmi');
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    setUserData(null);
  };

  return (
    <div className="app">
      {currentPage === 'home' && (
        <>
          <Navbar onSignUpClick={() => setCurrentPage('signup')} />
          <Hero onSignUpClick={() => setCurrentPage('signup')} />
          <Features />
          <Testimonial />
          <CTA onSignUpClick={() => setCurrentPage('signup')} />
          <Footer />
        </>
      )}
      {currentPage === 'signup' && (
        <>
          <Navbar onSignUpClick={() => setCurrentPage('signup')} />
          <SignUp onSignUpComplete={handleSignUpComplete} />
          <Footer />
        </>
      )}
      {currentPage === 'bmi' && userData && (
        <BMICalculator userData={userData} onBackHome={handleBackToHome} />
      )}
    </div>
  );
}
