import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
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
  };

  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.formCard}>
            <div className={styles.header}>
              <h1 className={styles.title}>Create an Account</h1>
              <p className={styles.subtitle}>Join our community of healthy families today.</p>
            </div>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <label htmlFor="name" className={styles.label}>Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={styles.input}
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.inputGroup}>
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
              <div className={styles.inputGroup}>
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
              <div className={styles.inputGroup}>
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
                Sign Up
              </button>
            </form>
            <div className={styles.footer}>
              <p className={styles.footerText}>
                Already have an account? <a href="#" className={styles.link}>Log In</a>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
