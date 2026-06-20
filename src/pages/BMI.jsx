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
      const bmiValue = weight / (heightInMeters * heightInMeters);
      const category = getCategory(bmiValue);
      setResult({
        value: bmiValue.toFixed(1),
        category
      });
    }
  };

  const getCategory = (bmi) => {
    if (bmi < 18.5) return 'Underweight';
    if (bmi < 25) return 'Normal';
    if (bmi < 30) return 'Overweight';
    return 'Obese';
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>BMI Calculator</h1>
        <p className={styles.subtitle}>Calculate your Body Mass Index (BMI) to understand if you are at a healthy weight.</p>

        <form className={styles.form} onSubmit={calculateBMI}>
          <div className={styles.field}>
            <label htmlFor="height">Height (cm)</label>
            <input
              type="number"
              id="height"
              placeholder="170"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              required
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="weight">Weight (kg)</label>
            <input
              type="number"
              id="weight"
              placeholder="65"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              required
            />
          </div>
          <button type="submit" className={styles.submitBtn}>
            Calculate BMI
          </button>
        </form>

        {result && (
          <div className={styles.result}>
            <div className={styles.resultValue}>{result.value}</div>
            <div className={`${styles.resultCategory} ${styles[result.category.toLowerCase()]}`}>
              {result.category}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
