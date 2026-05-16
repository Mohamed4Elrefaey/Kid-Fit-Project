import React, { useState } from 'react';
import styles from './BMI.module.css';

export default function BMI() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [result, setResult] = useState(null);

  const calculateBMI = (e) => {
    e.preventDefault();
    if (height && weight) {
      const h = parseFloat(height) / 100;
      const w = parseFloat(weight);
      const bmiValue = w / (h * h);

      let category = '';
      if (bmiValue < 18.5) category = 'Underweight';
      else if (bmiValue < 25) category = 'Normal';
      else if (bmiValue < 30) category = 'Overweight';
      else category = 'Obese';

      setResult({
        value: bmiValue.toFixed(1),
        category
      });
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.card}>
          <h1 className={styles.title}>BMI Calculator</h1>
          <p className={styles.subtitle}>Calculate your Body Mass Index</p>

          <form className={styles.form} onSubmit={calculateBMI}>
            <div className={styles.inputGroup}>
              <label htmlFor="height">Height (cm)</label>
              <input
                type="number"
                id="height"
                placeholder="e.g. 170"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="weight">Weight (kg)</label>
              <input
                type="number"
                id="weight"
                placeholder="e.g. 65"
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
              <p className={styles.resultLabel}>Your BMI is:</p>
              <p className={styles.resultValue}>{result.value}</p>
              <p className={`${styles.resultCategory} ${styles[result.category.toLowerCase()]}`}>
                {result.category}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
