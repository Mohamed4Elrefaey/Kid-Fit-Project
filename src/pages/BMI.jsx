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
      const heightInMeters = parseFloat(height) / 100;
      const weightInKg = parseFloat(weight);
      const bmiValue = weightInKg / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(1));

      if (bmiValue < 18.5) {
        setCategory('Underweight');
      } else if (bmiValue < 25) {
        setCategory('Normal');
      } else if (bmiValue < 30) {
        setCategory('Overweight');
      } else {
        setCategory('Obese');
      }
    }
  };

  return (
    <div className={styles.bmiContainer}>
      <div className={styles.bmiCard}>
        <h1 className={styles.heading}>BMI Calculator</h1>
        <p className={styles.subheading}>Track your child's healthy growth journey.</p>

        <form className={styles.form} onSubmit={calculateBMI}>
          <div className={styles.inputGrid}>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="height">Height (cm)</label>
              <input
                type="number"
                id="height"
                className={styles.input}
                placeholder="Ex: 150"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="weight">Weight (kg)</label>
              <input
                type="number"
                id="weight"
                className={styles.input}
                placeholder="Ex: 45"
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
          <div className={styles.resultWrapper}>
            <p className={styles.resultTitle}>Your Child's BMI</p>
            <div className={styles.bmiValue}>{bmi}</div>
            <div className={styles.category}>{category}</div>
          </div>
        )}
      </div>
    </div>
  );
}
