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
      } else if (bmiValue >= 18.5 && bmiValue < 25) {
        setCategory('Normal');
      } else if (bmiValue >= 25 && bmiValue < 30) {
        setCategory('Overweight');
      } else {
        setCategory('Obese');
      }
    }
  };

  return (
    <section className={styles.bmiSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.header}>
            <h1 className={styles.heading}>BMI Calculator</h1>
            <p className={styles.subheading}>
              Calculate your Body Mass Index (BMI) to understand if you are at a healthy weight.
            </p>
          </div>

          <div className={styles.grid}>
            <div className={styles.card}>
              <form className={styles.form} onSubmit={calculateBMI}>
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
                    placeholder="e.g. 65"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className={styles.calculateBtn}>Calculate BMI</button>
              </form>
            </div>

            <div className={styles.resultCard}>
              {bmi ? (
                <div className={styles.resultContent}>
                  <span className={styles.resultLabel}>Your BMI is</span>
                  <h2 className={styles.resultValue}>{bmi}</h2>
                  <div className={`${styles.categoryBadge} ${styles[category.toLowerCase()]}`}>
                    {category}
                  </div>
                  <p className={styles.resultMessage}>
                    {category === 'Normal'
                      ? "Great job! You're in a healthy weight range."
                      : "Consider consulting with a healthcare provider for personalized advice."}
                  </p>
                </div>
              ) : (
                <div className={styles.placeholderContent}>
                  <div className={styles.placeholderIcon}>?</div>
                  <p className={styles.placeholderText}>Enter your details to see your result</p>
                </div>
              )}
            </div>
          </div>

          <div className={styles.info}>
            <h3 className={styles.infoHeading}>BMI Categories</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Underweight</span>
                <span className={styles.infoValue}>Below 18.5</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Normal</span>
                <span className={styles.infoValue}>18.5 - 24.9</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Overweight</span>
                <span className={styles.infoValue}>25 - 29.9</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Obese</span>
                <span className={styles.infoValue}>30 or above</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
