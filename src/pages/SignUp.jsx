import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from './SignUp.module.css';

export default function SignUp() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for form submission
  };

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.card}>
          <h1 className={styles.title}>Join Healthy Kids</h1>
          <p className={styles.subtitle}>Start your child's journey to wellness today.</p>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>Full Name</label>
              <input type="text" id="name" className={styles.input} placeholder="Enter child's or parent's name" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>Email Address</label>
              <input type="email" id="email" className={styles.input} placeholder="name@example.com" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="password" className={styles.label}>Password</label>
              <input type="password" id="password" className={styles.input} placeholder="••••••••" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="confirmPassword" className={styles.label}>Confirm Password</label>
              <input type="password" id="confirmPassword" className={styles.input} placeholder="••••••••" required />
            </div>
            <button type="submit" className={styles.submitBtn}>Create Account</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
