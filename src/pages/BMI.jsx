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
      if (bmi < 18.5) category = 'Underweight';
      else if (bmi < 25) category = 'Normal';
      else if (bmi < 30) category = 'Overweight';
      else category = 'Obese';

      setResult({
        bmi: bmi.toFixed(1),
        category: category
      });
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.card}>
          <h1 className={styles.title}>BMI Calculator</h1>
          <p className={styles.subtitle}>Check your child's Body Mass Index quickly and easily.</p>

          <form className={styles.form} onSubmit={calculateBMI}>
            <div className={styles.field}>
              <label htmlFor="height" className={styles.label}>Height (cm)</label>
              <input
                type="number"
                id="height"
                className={styles.input}
                placeholder="e.g. 140"
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
                placeholder="e.g. 35"
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
              <div className={styles.resultLabel}>Your BMI is</div>
              <div className={styles.resultValue}>{result.bmi}</div>
              <div className={`${styles.category} ${styles[result.category.toLowerCase()]}`}>
                Category: {result.category}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
