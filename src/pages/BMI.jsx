import { useState } from 'react';
import styles from './BMI.module.css';

export default function BMI() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBMI = (e) => {
    e.preventDefault();
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      const roundedBmi = bmiValue.toFixed(1);
      setBmi(roundedBmi);
      setCategory(getBMICategory(bmiValue));
    }
  };

  const getBMICategory = (bmi) => {
    if (bmi < 18.5) return 'Underweight';
    if (bmi < 25) return 'Normal';
    if (bmi < 30) return 'Overweight';
    return 'Obese';
  };

  return (
    <div className={styles.bmiPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>BMI Calculator</h1>
          <p className={styles.subtitle}>Check your child's Body Mass Index</p>
        </div>
        <form className={styles.form} onSubmit={calculateBMI}>
          <div className={styles.grid}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="height">Height (cm)</label>
              <input
                type="number"
                id="height"
                placeholder="140"
                className={styles.input}
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                required
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="weight">Weight (kg)</label>
              <input
                type="number"
                id="weight"
                placeholder="45"
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

        {bmi && (
          <div className={styles.resultCard}>
            <p className={styles.resultLabel}>Your BMI Result</p>
            <h2 className={styles.resultValue}>{bmi}</h2>
            <p className={styles.category}>{category}</p>
          </div>
        )}
      </div>
    </div>
  );
}
