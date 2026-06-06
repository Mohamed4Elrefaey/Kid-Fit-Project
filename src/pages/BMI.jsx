import { useState } from 'react';
import styles from './BMI.module.css';

export default function BMI() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [result, setResult] = useState(null);

  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);

      let category = '';
      if (bmiValue < 18.5) category = 'Underweight';
      else if (bmiValue < 25) category = 'Normal';
      else if (bmiValue < 30) category = 'Overweight';
      else category = 'Obese';

      setResult({ value: bmiValue, category });
    }
  };

  return (
    <div className={styles.bmiPage}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h1 className={styles.title}>BMI Calculator</h1>
          <p className={styles.subtitle}>Check your Body Mass Index quickly and easily.</p>
        </div>
        <div className={styles.calculator}>
          <div className={styles.grid}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Height (cm)</label>
              <input
                type="number"
                className={styles.input}
                placeholder="e.g. 170"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Weight (kg)</label>
              <input
                type="number"
                className={styles.input}
                placeholder="e.g. 65"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
          </div>
          <button className={styles.calcBtn} onClick={calculateBMI}>Calculate BMI</button>

          {result && (
            <div className={styles.result}>
              <span className={styles.resultLabel}>Your BMI</span>
              <span className={styles.resultValue}>{result.value}</span>
              <span className={styles.category}>{result.category}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
