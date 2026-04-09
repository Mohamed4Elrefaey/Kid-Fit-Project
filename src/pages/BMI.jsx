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
      const bmiValue = w / (h * h);

      let category = '';
      if (bmiValue < 18.5) category = 'Underweight';
      else if (bmiValue < 25) category = 'Normal';
      else if (bmiValue < 30) category = 'Overweight';
      else category = 'Obese';

      setResult({
        value: bmiValue.toFixed(1),
        category
      });
    }
  };

  return (
    <div className={styles.bmiPage}>
      <div className={styles.container}>
        <div className={styles.card}>
          <h1 className={styles.heading}>BMI Calculator</h1>
          <p className={styles.subheading}>Enter your details below to calculate your Body Mass Index.</p>

          <form className={styles.form} onSubmit={calculateBMI}>
            <div className={styles.inputRow}>
              <div className={styles.inputGroup}>
                <label htmlFor="height" className={styles.label}>Height (cm)</label>
                <input
                  type="number"
                  id="height"
                  placeholder="170"
                  className={styles.input}
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
                  placeholder="65"
                  className={styles.input}
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

          {result && (
            <div className={styles.result}>
              <div className={styles.resultDivider}></div>
              <div className={styles.resultContent}>
                <div className={styles.resultValue}>
                  <span className={styles.resultLabel}>Your BMI</span>
                  <span className={styles.valueText}>{result.value}</span>
                </div>
                <div className={styles.resultCategory}>
                  <span className={styles.resultLabel}>Category</span>
                  <span className={`${styles.categoryText} ${styles[result.category.toLowerCase()]}`}>
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
