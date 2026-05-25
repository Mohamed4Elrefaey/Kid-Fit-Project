import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from './BMI.module.css';

export default function BMI() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [result, setResult] = useState(null);

  const calculateBMI = (e) => {
    e.preventDefault();
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      const category = getCategory(bmiValue);
      setResult({
        value: bmiValue.toFixed(1),
        category: category
      });
    }
  };

  const getCategory = (bmi) => {
    if (bmi < 18.5) return 'Underweight';
    if (bmi < 25) return 'Normal';
    if (bmi < 30) return 'Overweight';
    return 'Obese';
  };

  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.card}>
            <div className={styles.header}>
              <h1 className={styles.title}>BMI Calculator</h1>
              <p className={styles.subtitle}>Track your child's health and growth progress.</p>
            </div>
            <form className={styles.form} onSubmit={calculateBMI}>
              <div className={styles.inputGrid}>
                <div className={styles.inputGroup}>
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
                <div className={styles.inputGroup}>
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
              </div>
              <button type="submit" className={styles.calculateBtn}>
                Calculate BMI
              </button>
            </form>

            {result && (
              <div className={styles.result}>
                <div className={styles.resultValue}>{result.value}</div>
                <div className={styles.resultCategory}>Category: {result.category}</div>
                <p className={styles.resultInfo}>
                  BMI is a useful measure of overweight and obesity. It is calculated from your height and weight.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
