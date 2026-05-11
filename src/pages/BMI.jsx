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
    const bmiRounded = bmiValue.toFixed(1);

    let category = '';
    if (bmiValue < 18.5) category = 'Underweight';
    else if (bmiValue < 25) category = 'Normal';
    else if (bmiValue < 30) category = 'Overweight';
    else category = 'Obese';

    setResult({
      value: bmiRounded,
      category: category
    });
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.card}>
          <h1 className={styles.title}>BMI Calculator</h1>
          <p className={styles.subtitle}>Check your health status quickly.</p>

          <form className={styles.form} onSubmit={calculateBMI}>
            <div className={styles.field}>
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

            <div className={styles.field}>
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

            <button type="submit" className={styles.calculateBtn}>Calculate BMI</button>
          </form>

          {result && (
            <div className={styles.result}>
              <div className={styles.resultLabel}>Your BMI is</div>
              <div className={styles.resultValue}>{result.value}</div>
              <div className={`${styles.category} ${styles[result.category.toLowerCase()]}`}>
                {result.category}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
