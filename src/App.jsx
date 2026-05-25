import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';
import SignUp from './pages/SignUp.jsx';
import BMI from './pages/BMI.jsx';

export default function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/bmi" element={<BMI />} />
      </Routes>
    </div>
  );
}
