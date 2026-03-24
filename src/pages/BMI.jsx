import React, { useState } from 'react';
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

      if (bmiValue < 18.5) setCategory('Underweight');
      else if (bmiValue < 25) setCategory('Normal');
      else if (bmiValue < 30) setCategory('Overweight');
      else setCategory('Obese');
    }
  };

  return (
    <div className={styles.bmiPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>BMI Calculator</h1>
          <p className={styles.subtitle}>Track your child's growth and health</p>
        </div>
        <form className={styles.form} onSubmit={calculateBMI}>
          <div className={styles.formGroup}>
            <label htmlFor="height" className={styles.label}>Height (cm)</label>
            <input
              type="number"
              id="height"
              className={styles.input}
              placeholder="Enter height in cm"
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
              placeholder="Enter weight in kg"
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
            <span className={styles.resultLabel}>Your BMI Result</span>
            <span className={styles.bmiValue}>{bmi}</span>
            <span className={styles.category}>{category}</span>
          </div>
        )}
      </div>
    </div>
  );
}
