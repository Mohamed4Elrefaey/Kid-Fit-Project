import { useState } from 'react';
import styles from './BMI.module.css';

export default function BMI() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [result, setResult] = useState(null);

  const calculateBMI = (e) => {
    e.preventDefault();
    if (!height || !weight) return;

    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    const roundedBMI = Math.round(bmiValue * 10) / 10;

    let category = '';
    if (roundedBMI < 18.5) {
      category = 'Underweight';
    } else if (roundedBMI < 25) {
      category = 'Normal';
    } else if (roundedBMI < 30) {
      category = 'Overweight';
    } else {
      category = 'Obese';
    }

    setResult({ bmi: roundedBMI, category });
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.card}>
          <h1 className={styles.title}>BMI Calculator</h1>
          <p className={styles.subtitle}>Check your child's Body Mass Index to track their growth.</p>

          <form className={styles.form} onSubmit={calculateBMI}>
            <div className={styles.inputRow}>
              <div className={styles.inputGroup}>
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
              <div className={styles.inputGroup}>
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

            <button type="submit" className={styles.calculateBtn}>Calculate BMI</button>
          </form>

          {result && (
            <div className={styles.result}>
              <div className={styles.resultDivider}></div>
              <div className={styles.resultContent}>
                <div className={styles.bmiValueWrapper}>
                  <span className={styles.bmiLabel}>Your BMI</span>
                  <span className={styles.bmiValue}>{result.bmi}</span>
                </div>
                <div className={styles.categoryWrapper}>
                  <span className={styles.categoryLabel}>Category</span>
                  <span className={`${styles.categoryValue} ${styles[result.category.toLowerCase()]}`}>
                    {result.category}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
