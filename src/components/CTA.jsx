import styles from './CTA.module.css';

export default function CTA({ onSignUpClick }) {
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
            <button 
              className={styles.primaryBtn}
              onClick={onSignUpClick}
            >
              Get Started for Free
            </button>
            <button className={styles.secondaryBtn}>View Pricing Plans</button>
          </div>
        </div>
      </div>
    </section>
  );
}
