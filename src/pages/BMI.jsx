import React, { useState } from 'react';
import styles from './BMI.module.css';

export default function BMI() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBMI = (e) => {
    e.preventDefault();
    if (!height || !weight) return;

    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    const roundedBmi = bmiValue.toFixed(1);
    setBmi(roundedBmi);

    if (bmiValue < 18.5) {
      setCategory('Underweight');
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      setCategory('Normal');
    } else if (bmiValue >= 25 && bmiValue < 30) {
      setCategory('Overweight');
    } else {
      setCategory('Obese');
    }
  };

  return (
    <div className={styles.bmiPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>BMI Calculator</h1>
          <p className={styles.subtitle}>Calculate your Body Mass Index quickly and easily.</p>
        </div>
        <form className={styles.form} onSubmit={calculateBMI}>
          <div className={styles.formGroup}>
            <label htmlFor="height" className={styles.label}>Height (cm)</label>
            <div className={styles.inputWrapper}>
              <input
                type="number"
                id="height"
                className={styles.input}
                placeholder="160"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                required
              />
              <span className={styles.unit}>cm</span>
            </div>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="weight" className={styles.label}>Weight (kg)</label>
            <div className={styles.inputWrapper}>
              <input
                type="number"
                id="weight"
                className={styles.input}
                placeholder="55"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
              />
              <span className={styles.unit}>kg</span>
            </div>
          </div>
          <button type="submit" className={styles.calculateBtn}>
            Calculate BMI
          </button>
        </form>

        {bmi && (
          <div className={styles.result}>
            <div className={styles.resultTitle}>Your Result</div>
            <div className={styles.bmiValue}>{bmi}</div>
            <div className={styles.bmiCategory}>{category}</div>
          </div>
        )}
      </div>
    </div>
  );
}
