import { useState } from 'react';
import styles from './BMI.module.css';

export default function BMI() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBMI = (e) => {
    e.preventDefault();
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters));
      setBmi(bmiValue.toFixed(1));
      setCategory(getCategory(bmiValue));
    }
  };

  const getCategory = (bmiValue) => {
    if (bmiValue < 18.5) return 'Underweight';
    if (bmiValue >= 18.5 && bmiValue < 25) return 'Normal';
    if (bmiValue >= 25 && bmiValue < 30) return 'Overweight';
    return 'Obese';
  };

  return (
    <main className={styles.bmi}>
      <div className={styles.container}>
        <h1 className={styles.title}>BMI Calculator</h1>
        <p className={styles.subtitle}>Check your body mass index easily.</p>
        <form className={styles.form} onSubmit={calculateBMI}>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="height">Height (cm)</label>
            <input
              type="number"
              id="height"
              placeholder="e.g. 170"
              className={styles.input}
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="weight">Weight (kg)</label>
            <input
              type="number"
              id="weight"
              placeholder="e.g. 65"
              className={styles.input}
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              required
            />
          </div>
          <button type="submit" className={styles.calculateBtn}>
            Calculate BMI
          </button>
        </form>

        {bmi && (
          <div className={styles.result}>
            <span className={styles.bmiLabel}>Your BMI</span>
            <span className={styles.bmiValue}>{bmi}</span>
            <div className={styles.category}>Category: {category}</div>
          </div>
        )}
      </div>
    </main>
  );
}
