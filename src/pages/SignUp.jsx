import React from 'react';
import styles from './SignUp.module.css';

export default function SignUp() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted');
  };

  return (
    <div className={styles.signup}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Create Account</h1>
          <p className={styles.subtitle}>Join us and start your healthy journey today!</p>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="name">Full Name</label>
            <input
              className={styles.input}
              type="text"
              id="name"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="email">Email Address</label>
            <input
              className={styles.input}
              type="email"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="password">Password</label>
            <input
              className={styles.input}
              type="password"
              id="password"
              placeholder="Create a password"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="confirmPassword">Confirm Password</label>
            <input
              className={styles.input}
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              required
            />
          </div>
          <button type="submit" className={styles.submitBtn}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
