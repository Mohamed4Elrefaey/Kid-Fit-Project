import { useState } from 'react';
import styles from './BMI.module.css';

export default function BMI() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [result, setResult] = useState(null);

  const calculateBMI = (e) => {
    e.preventDefault();
    if (!height || !weight) return;

    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);
    const bmi = (w / (h * h)).toFixed(1);

    let category = '';
    if (bmi < 18.5) category = 'Underweight';
    else if (bmi < 25) category = 'Normal';
    else if (bmi < 30) category = 'Overweight';
    else category = 'Obese';

    setResult({ bmi, category });
  };

  return (
    <div className={styles.bmi}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>BMI Health Check</h1>
          <p className={styles.subtitle}>Track your child's growth and health</p>
        </div>
        <form className={styles.form} onSubmit={calculateBMI}>
          <div className={styles.formGroup}>
            <label htmlFor="height" className={styles.label}>Height (cm)</label>
            <input
              type="number"
              id="height"
              className={styles.input}
              placeholder="Enter height in cm"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="weight" className={styles.label}>Weight (kg)</label>
            <input
              type="number"
              id="weight"
              className={styles.input}
              placeholder="Enter weight in kg"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              required
            />
          </div>
          <button type="submit" className={styles.calculateBtn}>Calculate BMI</button>
        </form>

        {result && (
          <div className={styles.result}>
            <h2 className={styles.resultTitle}>Your Result</h2>
            <div className={styles.bmiValue}>{result.bmi}</div>
            <div className={styles.category}>{result.category}</div>
            <p className={styles.info}>
              This calculation is a general guide. For a more accurate assessment,
              please consult with your child's pediatrician.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
