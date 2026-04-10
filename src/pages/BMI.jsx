import React, { useState } from 'react';
import styles from './BMI.module.css';

export default function BMI() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [result, setResult] = useState(null);

  const calculateBMI = (e) => {
    e.preventDefault();
    if (!height || !weight) return;

    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    const roundedBMI = Math.round(bmiValue * 10) / 10;

    let category = '';
    if (roundedBMI < 18.5) {
      category = 'Underweight';
    } else if (roundedBMI < 25) {
      category = 'Normal';
    } else if (roundedBMI < 30) {
      category = 'Overweight';
    } else {
      category = 'Obese';
    }

    setResult({ bmi: roundedBMI, category });
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.heading}>BMI Calculator</h1>
          <p className={styles.subheading}>Check your child's Body Mass Index to track their growth and health.</p>
        </div>
        <form className={styles.form} onSubmit={calculateBMI}>
          <div className={styles.inputGroup}>
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
          <div className={styles.inputGroup}>
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
          <button type="submit" className={styles.calculateBtn}>
            Calculate BMI
          </button>
        </form>

        {result && (
          <div className={styles.resultCard}>
            <div className={styles.resultHeader}>Your Results</div>
            <div className={styles.bmiValue}>{result.bmi}</div>
            <div className={styles.categoryLabel}>
              Category: <span className={styles.categoryValue}>{result.category}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
