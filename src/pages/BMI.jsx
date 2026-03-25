import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from './BMI.module.css';

export default function BMI() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBMI = (e) => {
    e.preventDefault();
    if (height && weight) {
      const h = parseFloat(height) / 100;
      const w = parseFloat(weight);
      const bmiValue = w / (h * h);
      setBmi(bmiValue.toFixed(1));

      if (bmiValue < 18.5) {
        setCategory('Underweight');
      } else if (bmiValue < 25) {
        setCategory('Normal');
      } else if (bmiValue < 30) {
        setCategory('Overweight');
      } else {
        setCategory('Obese');
      }
    }
  };

  const getCategoryClass = (cat) => {
    switch (cat) {
      case 'Underweight': return styles.underweight;
      case 'Normal': return styles.normal;
      case 'Overweight': return styles.overweight;
      case 'Obese': return styles.obese;
      default: return '';
    }
  };

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.card}>
          <h1 className={styles.title}>BMI Calculator</h1>
          <p className={styles.subtitle}>Check your child's Body Mass Index</p>
          <form className={styles.form} onSubmit={calculateBMI}>
            <div className={styles.formGroup}>
              <label htmlFor="height" className={styles.label}>Height (cm)</label>
              <input
                type="number"
                id="height"
                className={styles.input}
                placeholder="e.g. 140"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="weight" className={styles.label}>Weight (kg)</label>
              <input
                type="number"
                id="weight"
                className={styles.input}
                placeholder="e.g. 35"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
              />
            </div>
            <button type="submit" className={styles.calculateBtn}>Calculate BMI</button>
          </form>

          {bmi && (
            <div className={styles.result}>
              <span className={styles.bmiLabel}>Your BMI</span>
              <span className={styles.bmiValue}>{bmi}</span>
              <div className={`${styles.category} ${getCategoryClass(category)}`}>
                {category}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
