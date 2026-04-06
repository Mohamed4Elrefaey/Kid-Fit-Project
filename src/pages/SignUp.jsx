import React from 'react';
import styles from './SignUp.module.css';

export default function SignUp() {
  return (
    <div className={styles.signupPage}>
      <div className={styles.container}>
        <div className={styles.formCard}>
          <div className={styles.header}>
            <h1 className={styles.heading}>Create an Account</h1>
            <p className={styles.subheading}>Join Healthy Kids and start your journey today.</p>
          </div>
          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <label htmlFor="name" className={styles.label}>Full Name</label>
              <input type="text" id="name" className={styles.input} placeholder="Enter your full name" required />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.label}>Email Address</label>
              <input type="email" id="email" className={styles.input} placeholder="Enter your email" required />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="password" className={styles.label}>Password</label>
              <input type="password" id="password" className={styles.input} placeholder="Create a password" required />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="confirm-password" className={styles.label}>Confirm Password</label>
              <input type="password" id="confirm-password" className={styles.input} placeholder="Confirm your password" required />
            </div>
            <button type="submit" className={styles.submitBtn}>Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}
