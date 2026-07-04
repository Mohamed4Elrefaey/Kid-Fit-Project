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
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
      setBmi(bmiValue);

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

  const getCategoryClass = () => {
    switch (category) {
      case 'Underweight': return styles.categoryUnderweight;
      case 'Normal': return styles.categoryNormal;
      case 'Overweight': return styles.categoryOverweight;
      case 'Obese': return styles.categoryObese;
      default: return '';
    }
  };

  return (
    <div className={styles.bmiPage}>
      <div className={styles.card}>
        <h1 className={styles.title}>BMI Calculator</h1>
        <p className={styles.subtitle}>Enter your details to calculate your Body Mass Index</p>

        <form onSubmit={calculateBMI}>
          <div className={styles.grid}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="height">Height (cm)</label>
              <input
                id="height"
                type="number"
                className={styles.input}
                placeholder="e.g. 170"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                required
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="weight">Weight (kg)</label>
              <input
                id="weight"
                type="number"
                className={styles.input}
                placeholder="e.g. 65"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
              />
            </div>
          </div>

          <button type="submit" className={styles.calculateBtn}>Calculate BMI</button>
        </form>

        {bmi && (
          <div className={styles.result}>
            <p className={styles.resultLabel}>Your BMI is</p>
            <h2 className={styles.resultValue}>{bmi}</h2>
            <div className={`${styles.category} ${getCategoryClass()}`}>
              {category}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
