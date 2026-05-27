import { useState } from 'react';
import styles from './BMI.module.css';

export default function BMI() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [result, setResult] = useState(null);

  const calculateBMI = (e) => {
    e.preventDefault();
    if (height && weight) {
      const bmi = parseFloat(weight) / Math.pow(parseFloat(height) / 100, 2);
      let category = '';

      if (bmi < 18.5) {
        category = 'Underweight';
      } else if (bmi >= 18.5 && bmi < 25) {
        category = 'Normal';
      } else if (bmi >= 25 && bmi < 30) {
        category = 'Overweight';
      } else {
        category = 'Obese';
      }

      setResult({
        value: bmi.toFixed(1),
        category: category
      });
    }
  };

  return (
    <div className={styles.bmi}>
      <div className={styles.container}>
        <h1 className={styles.title}>BMI Calculator</h1>
        <p className={styles.subtitle}>Track your health progress</p>
        <form className={styles.form} onSubmit={calculateBMI}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Height (cm)</label>
            <input
              type="number"
              placeholder="e.g. 170"
              className={styles.input}
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Weight (kg)</label>
            <input
              type="number"
              placeholder="e.g. 70"
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
            <p className={styles.resultTitle}>Your BMI result</p>
            <p className={styles.resultValue}>{result.value}</p>
            <p className={styles.resultCategory}>{result.category}</p>
          </div>
        )}
      </div>
    </div>
  );
}
