import styles from './CTA.module.css';
import { Link } from 'react-router-dom';

export default function CTA() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.glowLeft}></div>
        <div className={styles.glowRight}></div>
        <div className={styles.content}>
          <h2 className={styles.heading}>Ready to start the journey?</h2>
          <p className={styles.description}>
            Give your child the gift of health today. Sign up for free and get
            access to our first 3 activities immediately.
          </p>
          <div className={styles.actions}>
            <Link to="/signup" className={styles.primaryBtn}>Get Started for Free</Link>
            <button className={styles.secondaryBtn}>View Pricing Plans</button>
          </div>
        </div>
      </div>
    </section>
  );
}
