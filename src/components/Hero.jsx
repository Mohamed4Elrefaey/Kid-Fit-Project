import styles from './Hero.module.css';
import { Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className={styles.hero} id="about">
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.badgeDot}></span>
            <span className={styles.badgeText}>Join 50,000+ Happy Families</span>
          </div>
          <h1 className={styles.heading}>
            Healthy Kids,<br />
            <span className={styles.headingAccent}>Happy Life</span>
          </h1>
          <p className={styles.description}>
            Building healthy habits today for a brighter, more active
            tomorrow. Join a fun-filled journey to wellness designed
            specifically for children.
          </p>
          <div className={styles.actions}>
            <button className={styles.primaryBtn}>
              Start Your Child's Healthy Journey
            </button>
            <button className={styles.secondaryBtn}>
              <Play size={18} fill="#0F172A" color="#0F172A" />
              See How It Works
            </button>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <div className={styles.imageBg}></div>
          <img
            src="https://cdn.codia.ai/figma/t7K2MhnyL2edQQmfjeDLrb/img-4596e3e49f48a063.png"
            alt="Happy kids"
            className={styles.heroImage}
          />
          <div className={styles.dailyGoalCard}>
            <div className={styles.dailyGoalIcon}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 2a8 8 0 100 16A8 8 0 0010 2zm0 3a1 1 0 011 1v3.586l2.707 2.707a1 1 0 11-1.414 1.414l-3-3A1 1 0 019 10V6a1 1 0 011-1z" fill="white" />
              </svg>
            </div>
            <div className={styles.dailyGoalInfo}>
              <span className={styles.dailyGoalLabel}>Daily Goal</span>
              <span className={styles.dailyGoalValue}>Active for 60m</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
