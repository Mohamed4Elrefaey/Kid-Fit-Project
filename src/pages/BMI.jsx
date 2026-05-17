import { useState } from 'react';
import styles from './BMI.module.css';

export default function BMI() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [result, setResult] = useState(null);

  const calculateBMI = (e) => {
    e.preventDefault();
    if (height && weight) {
      const hMeters = height / 100;
      const bmi = weight / (hMeters * hMeters);
      const roundedBMI = Math.round(bmi * 10) / 10;

      let category = '';
      if (roundedBMI < 18.5) category = 'Underweight';
      else if (roundedBMI < 25) category = 'Normal';
      else if (roundedBMI < 30) category = 'Overweight';
      else category = 'Obese';

      setResult({ bmi: roundedBMI, category });
    }
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.calcCard}>
        <div className={styles.header}>
          <h1 className={styles.title}>BMI Calculator</h1>
          <p className={styles.subtitle}>Enter your details below to calculate your Body Mass Index.</p>
        </div>
        <form className={styles.form} onSubmit={calculateBMI}>
          <div className={styles.inputGroup}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="height">Height (cm)</label>
              <input
                className={styles.input}
                type="number"
                id="height"
                placeholder="170"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                required
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="weight">Weight (kg)</label>
              <input
                className={styles.input}
                type="number"
                id="weight"
                placeholder="70"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
              />
            </div>
          </div>
          <button className={styles.calcBtn} type="submit">Calculate BMI</button>
        </form>

        {result && (
          <div className={styles.result}>
            <span className={styles.resultTitle}>Your BMI result</span>
            <span className={styles.bmiValue}>{result.bmi}</span>
            <span className={styles.category}>{result.category}</span>
          </div>
        )}
      </div>
    </div>
  );
}
