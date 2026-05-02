import { useState } from 'react';
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
      if (bmi < 18.5) {
        category = 'Underweight';
      } else if (bmi < 25) {
        category = 'Normal';
      } else if (bmi < 30) {
        category = 'Overweight';
      } else {
        category = 'Obese';
      }

      setResult({
        bmi: bmi.toFixed(1),
        category: category
      });
    }
  };

  return (
    <div className={styles.bmiPage}>
      <div className={styles.container}>
        <div className={styles.card}>
          <h1 className={styles.title}>BMI Calculator</h1>
          <p className={styles.subtitle}>Calculate your Body Mass Index</p>
          <form className={styles.form} onSubmit={calculateBMI}>
            <div className={styles.inputGroup}>
              <label htmlFor="height" className={styles.label}>Height (cm)</label>
              <input
                type="number"
                id="height"
                className={styles.input}
                placeholder="e.g. 170"
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
              <div className={styles.resultDivider}></div>
              <div className={styles.resultContent}>
                <span className={styles.resultLabel}>Your BMI</span>
                <span className={styles.resultValue}>{result.bmi}</span>
                <span className={`${styles.category} ${styles[result.category.toLowerCase()]}`}>
                  {result.category}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
