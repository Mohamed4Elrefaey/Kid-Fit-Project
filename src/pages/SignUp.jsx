import React from 'react';
import styles from './SignUp.module.css';

export default function SignUp() {
  return (
    <div className={styles.signupPage}>
      <div className={styles.container}>
        <div className={styles.card}>
          <h1 className={styles.title}>Create your account</h1>
          <p className={styles.subtitle}>Join our community of healthy families today.</p>

          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.inputGroup}>
              <label htmlFor="name" className={styles.label}>Name</label>
              <input type="text" id="name" className={styles.input} placeholder="Enter your name" />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input type="email" id="email" className={styles.input} placeholder="Enter your email" />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="password" className={styles.label}>Password</label>
              <input type="password" id="password" className={styles.input} placeholder="Create a password" />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="confirm-password" className={styles.label}>Confirm password</label>
              <input type="password" id="confirm-password" className={styles.input} placeholder="Confirm your password" />
            </div>

            <button type="submit" className={styles.submitBtn}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
