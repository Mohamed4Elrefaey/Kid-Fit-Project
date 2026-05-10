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
      if (bmiValue < 18.5) category = 'Underweight';
      else if (bmiValue < 25) category = 'Normal';
      else if (bmiValue < 30) category = 'Overweight';
      else category = 'Obese';

      setResult({ value: bmiValue, category });
    }
  };

  return (
    <div className={styles.bmiPage}>
      <div className={styles.container}>
        <div className={styles.card}>
          <h1 className={styles.title}>BMI Calculator</h1>
          <p className={styles.subtitle}>Enter your details to calculate your Body Mass Index.</p>
          <form className={styles.form} onSubmit={calculateBMI}>
            <div className={styles.inputGroup}>
              <label htmlFor="height">Height (cm)</label>
              <input
                type="number"
                id="height"
                placeholder="e.g. 170"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
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
              />
            </div>
            <button type="submit" className={styles.calculateBtn}>Calculate BMI</button>
          </form>

          {result && (
            <div className={styles.result}>
              <h3>Your BMI: <span>{result.value}</span></h3>
              <p>Category: <strong>{result.category}</strong></p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
