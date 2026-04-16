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
    console.log('Form submitted:', formData);
    alert('Sign up successful! (Simulation)');
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.card}>
          <h1 className={styles.title}>Join Healthy Kids</h1>
          <p className={styles.subtitle}>Start your child's journey to a healthier lifestyle today.</p>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.field}>
              <label htmlFor="name" className={styles.label}>Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className={styles.input}
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="email" className={styles.label}>Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                className={styles.input}
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="password" className={styles.label}>Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className={styles.input}
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="confirmPassword" className={styles.label}>Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className={styles.input}
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className={styles.submitBtn}>
              Create Account
            </button>
          </form>

          <p className={styles.footerText}>
            Already have an account? <a href="/login" className={styles.link}>Log In</a>
          </p>
        </div>
      </div>
    </div>
  );
}
