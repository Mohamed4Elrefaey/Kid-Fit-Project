import React, { useState } from 'react';
import styles from './BMI.module.css';

export default function BMI() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [result, setResult] = useState(null);

  const calculateBMI = () => {
    if (height && weight) {
      const hMeters = height / 100;
      const bmiValue = weight / (hMeters * hMeters);
      let category = '';

      if (bmiValue < 18.5) category = 'Underweight';
      else if (bmiValue < 25) category = 'Normal';
      else if (bmiValue < 30) category = 'Overweight';
      else category = 'Obese';

      setResult({
        value: bmiValue.toFixed(1),
        category: category
      });
    }
  };

  return (
    <div className={styles.bmiPage}>
      <div className={styles.container}>
        <div className={styles.card}>
          <h1 className={styles.title}>BMI Calculator</h1>
          <p className={styles.subtitle}>Track your child's healthy growth.</p>

          <div className={styles.form}>
            <div className={styles.inputGroup}>
              <label htmlFor="height" className={styles.label}>Height (cm)</label>
              <input
                type="number"
                id="height"
                className={styles.input}
                placeholder="e.g. 140"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
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
              />
            </div>

            <button className={styles.calculateBtn} onClick={calculateBMI}>
              Calculate BMI
            </button>
          </div>

          {result && (
            <div className={styles.result}>
              <div className={styles.resultLabel}>Your BMI</div>
              <div className={styles.resultValue}>{result.value}</div>
              <div className={`${styles.category} ${styles[result.category.toLowerCase()]}`}>
                {result.category}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
