import { useState } from 'react';
import styles from './BMI.module.css';

export default function BMI() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmiResult, setBmiResult] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBMI = (e) => {
    e.preventDefault();
    if (height && weight) {
      const h = parseFloat(height) / 100;
      const w = parseFloat(weight);
      const bmi = w / (h * h);
      const roundedBMI = bmi.toFixed(1);
      setBmiResult(roundedBMI);

      if (bmi < 18.5) {
        setCategory('Underweight');
      } else if (bmi >= 18.5 && bmi < 25) {
        setCategory('Normal');
      } else if (bmi >= 25 && bmi < 30) {
        setCategory('Overweight');
      } else {
        setCategory('Obese');
      }
    }
  };

  return (
    <div className={styles.bmi}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>BMI Calculator</h1>
          <p className={styles.subtitle}>Check if your child is growing healthily.</p>
        </div>
        <form className={styles.form} onSubmit={calculateBMI}>
          <div className={styles.inputGrid}>
            <div className={styles.formGroup}>
              <label htmlFor="height" className={styles.label}>Height (cm)</label>
              <input
                type="number"
                id="height"
                className={styles.input}
                placeholder="e.g. 150"
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
                placeholder="e.g. 45"
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

        {bmiResult && (
          <div className={styles.result}>
            <p className={styles.resultTitle}>Your BMI Result</p>
            <h2 className={styles.resultValue}>{bmiResult}</h2>
            <p className={styles.resultCategory}>Category: {category}</p>
          </div>
        )}
      </div>
    </div>
  );
}
