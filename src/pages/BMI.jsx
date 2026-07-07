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
      const roundedBMI = bmiValue.toFixed(1);

      let category = '';
      if (bmiValue < 18.5) {
        category = 'Underweight';
      } else if (bmiValue < 25) {
        category = 'Normal';
      } else if (bmiValue < 30) {
        category = 'Overweight';
      } else {
        category = 'Obese';
      }

      setResult({ bmi: roundedBMI, category });
    }
  };

  return (
    <div className={styles.bmiPage}>
      <div className={styles.container}>
        <div className={styles.card}>
          <h1 className={styles.title}>BMI Calculator</h1>
          <p className={styles.subtitle}>Track your child's growth and health.</p>

          <form className={styles.form} onSubmit={calculateBMI}>
            <div className={styles.field}>
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
            <div className={styles.field}>
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
            <button type="submit" className={styles.calculateBtn}>
              Calculate BMI
            </button>
          </form>

          {result && (
            <div className={styles.result}>
              <div className={styles.resultLabel}>Your BMI</div>
              <div className={styles.resultValue}>{result.bmi}</div>
              <div className={`${styles.resultCategory} ${styles[result.category.toLowerCase()]}`}>
                {result.category}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
