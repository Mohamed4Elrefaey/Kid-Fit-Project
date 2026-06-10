import { useState } from 'react';
import styles from './BMI.module.css';

export default function BMI() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [result, setResult] = useState(null);

  const calculateBMI = (e) => {
    e.preventDefault();
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);

      let category = '';
      let categoryClass = '';

      if (bmiValue < 18.5) {
        category = 'Underweight';
        categoryClass = styles.underweight;
      } else if (bmiValue < 25) {
        category = 'Normal';
        categoryClass = styles.normal;
      } else if (bmiValue < 30) {
        category = 'Overweight';
        categoryClass = styles.overweight;
      } else {
        category = 'Obese';
        categoryClass = styles.obese;
      }

      setResult({ value: bmiValue, category, categoryClass });
    }
  };

  return (
    <div className={styles.bmi}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>BMI Calculator</h1>
          <p className={styles.subtitle}>Enter your details below to calculate your BMI.</p>
        </div>
        <form className={styles.form} onSubmit={calculateBMI}>
          <div className={styles.grid}>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="height">Height (cm)</label>
              <input
                type="number"
                id="height"
                placeholder="e.g. 150"
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
                placeholder="e.g. 45"
                className={styles.input}
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
          <div className={styles.result}>
            <p className={styles.resultTitle}>Your BMI is</p>
            <div className={styles.bmiValue}>{result.value}</div>
            <div className={`${styles.category} ${result.categoryClass}`}>
              {result.category}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
