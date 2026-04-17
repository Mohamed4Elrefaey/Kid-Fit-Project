import React, { useState } from 'react';
import styles from './BMI.module.css';

export default function BMI() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [result, setResult] = useState(null);

  const calculateBMI = (e) => {
    e.preventDefault();
    if (height && weight) {
      const bmi = (weight / Math.pow(height / 100, 2)).toFixed(1);
      let category = '';
      if (bmi < 18.5) category = 'Underweight';
      else if (bmi < 25) category = 'Normal';
      else if (bmi < 30) category = 'Overweight';
      else category = 'Obese';

      setResult({ bmi, category });
    }
  };

  return (
    <div className={styles.bmiPage}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.header}>
            <h1 className={styles.title}>BMI Calculator</h1>
            <p className={styles.subtitle}>Check your child's health metrics quickly and easily.</p>
          </div>
          <form className={styles.form} onSubmit={calculateBMI}>
            <div className={styles.inputGroup}>
              <label htmlFor="height" className={styles.label}>Height (cm)</label>
              <input
                type="number"
                id="height"
                placeholder="e.g. 140"
                className={styles.input}
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
                placeholder="e.g. 35"
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

          {result && (
            <div className={styles.result}>
              <div className={styles.resultHeader}>Your Results</div>
              <div className={styles.bmiValue}>{result.bmi}</div>
              <div className={`${styles.category} ${styles[result.category.toLowerCase()]}`}>
                {result.category}
              </div>
              <p className={styles.recommendation}>
                {result.category === 'Normal'
                  ? "Great job! Keep up the healthy lifestyle."
                  : "Consider consulting with a healthcare professional for personalized advice."}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
