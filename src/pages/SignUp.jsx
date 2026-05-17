import { useState } from 'react';
import styles from './SignUp.module.css';

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign Up attempted:', formData);
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.formCard}>
        <div className={styles.header}>
          <h1 className={styles.title}>Join Healthy Kids</h1>
          <p className={styles.subtitle}>Start your journey to a healthier lifestyle today.</p>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="name">Name</label>
            <input
              className={styles.input}
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="email">Email</label>
            <input
              className={styles.input}
              type="email"
              id="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="password">Password</label>
            <input
              className={styles.input}
              type="password"
              id="password"
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="confirmPassword">Confirm Password</label>
            <input
              className={styles.input}
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button className={styles.submitBtn} type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}
