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
      const bmi = w / (h * h);

      let category = '';
      if (bmi < 18.5) category = 'Underweight';
      else if (bmi < 25) category = 'Normal';
      else if (bmi < 30) category = 'Overweight';
      else category = 'Obese';

      setResult({
        bmi: bmi.toFixed(1),
        category: category
      });
    }
  };

  return (
    <div className={styles.bmiPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>BMI Calculator</h1>
          <p className={styles.subtitle}>Check your Body Mass Index to stay on track with your health goals.</p>
        </div>

        <form className={styles.calculator} onSubmit={calculateBMI}>
          <div className={styles.inputsGrid}>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="height">Height (cm)</label>
              <input
                className={styles.input}
                type="number"
                id="height"
                placeholder="e.g. 170"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="weight">Weight (kg)</label>
              <input
                className={styles.input}
                type="number"
                id="weight"
                placeholder="e.g. 65"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
              />
            </div>
          </div>
          <button type="submit" className={styles.calculateBtn}>
            Calculate BMI
          </button>
        </form>

        {result && (
          <div className={styles.resultContainer}>
            <span className={styles.resultValue}>{result.bmi}</span>
            <div className={styles.resultCategory}>
              Category: {result.category}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
