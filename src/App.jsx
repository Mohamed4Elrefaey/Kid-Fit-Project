import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonial from './components/Testimonial';
import CTA from './components/CTA';
import Footer from './components/Footer';
import SignUp from './pages/SignUp';
import BMI from './pages/BMI';

function LandingPage() {
  return (
    <>
      <Hero />
      <Features />
      <Testimonial />
      <CTA />
    </>
  );
}

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/bmi" element={<BMI />} />
      </Routes>
      <Footer />
    </div>
  );
}
