import React, { useState } from 'react';
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

  return (
    <div className={styles.bmiPage}>
      <div className={styles.container}>
        <div className={styles.calculatorCard}>
          <div className={styles.header}>
            <h1 className={styles.heading}>BMI Calculator</h1>
            <p className={styles.subheading}>Find out your Body Mass Index quickly and easily.</p>
          </div>
          <form className={styles.form} onSubmit={calculateBMI}>
            <div className={styles.inputRow}>
              <div className={styles.inputGroup}>
                <label htmlFor="height" className={styles.label}>Height (cm)</label>
                <input
                  type="number"
                  id="height"
                  className={styles.input}
                  placeholder="e.g. 170"
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
                  placeholder="e.g. 70"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  required
                />
              </div>
            </div>
            <button type="submit" className={styles.calculateBtn}>Calculate BMI</button>
          </form>
          {bmi && (
            <div className={styles.resultContainer}>
              <div className={styles.resultValue}>{bmi}</div>
              <div className={styles.resultCategory}>
                Your category is <span className={styles.categoryName}>{category}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
